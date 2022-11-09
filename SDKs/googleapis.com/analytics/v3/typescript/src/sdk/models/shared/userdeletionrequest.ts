import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserDeletionRequestId
/** 
 * User ID.
**/
export class UserDeletionRequestId extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


// UserDeletionRequest
/** 
 * JSON template for a user deletion request resource.
**/
export class UserDeletionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletionRequestTime" })
  deletionRequestTime?: Date;

  @Metadata({ data: "json, name=firebaseProjectId" })
  firebaseProjectId?: string;

  @Metadata({ data: "json, name=id" })
  id?: UserDeletionRequestId;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @Metadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
