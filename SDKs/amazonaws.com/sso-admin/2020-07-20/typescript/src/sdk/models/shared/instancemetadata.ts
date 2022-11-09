import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceMetadata
/** 
 * Provides information about the SSO instance.
**/
export class InstanceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=IdentityStoreId" })
  identityStoreId?: string;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn?: string;
}
