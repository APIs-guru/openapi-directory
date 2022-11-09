import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessControlAttribute } from "./accesscontrolattribute";
/**
 * Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
**/
export declare class InstanceAccessControlAttributeConfiguration extends SpeakeasyBase {
    accessControlAttributes: AccessControlAttribute[];
}
