import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessControlAttribute } from "./accesscontrolattribute";


// InstanceAccessControlAttributeConfiguration
/** 
 * Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
**/
export class InstanceAccessControlAttributeConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccessControlAttributes", elemType: shared.AccessControlAttribute })
  accessControlAttributes: AccessControlAttribute[];
}
