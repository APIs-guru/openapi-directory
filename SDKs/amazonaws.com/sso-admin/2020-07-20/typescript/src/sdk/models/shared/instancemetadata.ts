import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceMetadata
/** 
 * Provides information about the SSO instance.
**/
export class InstanceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IdentityStoreId" })
  identityStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn?: string;
}
