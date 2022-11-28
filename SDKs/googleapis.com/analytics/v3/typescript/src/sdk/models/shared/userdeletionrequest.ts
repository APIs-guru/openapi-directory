import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserDeletionRequestId
/** 
 * User ID.
**/
export class UserDeletionRequestId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// UserDeletionRequest
/** 
 * JSON template for a user deletion request resource.
**/
export class UserDeletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletionRequestTime" })
  deletionRequestTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=firebaseProjectId" })
  firebaseProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: UserDeletionRequestId;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}


// UserDeletionRequestInput
/** 
 * JSON template for a user deletion request resource.
**/
export class UserDeletionRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firebaseProjectId" })
  firebaseProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: UserDeletionRequestId;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=webPropertyId" })
  webPropertyId?: string;
}
