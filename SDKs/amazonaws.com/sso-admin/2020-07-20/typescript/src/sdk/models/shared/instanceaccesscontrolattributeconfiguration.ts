import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessControlAttribute } from "./accesscontrolattribute";



// InstanceAccessControlAttributeConfiguration
/** 
 * Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
**/
export class InstanceAccessControlAttributeConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessControlAttributes", elemType: AccessControlAttribute })
  accessControlAttributes: AccessControlAttribute[];
}
