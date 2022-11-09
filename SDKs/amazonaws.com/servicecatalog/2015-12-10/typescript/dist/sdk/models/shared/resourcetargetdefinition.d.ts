import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceAttributeEnum } from "./resourceattributeenum";
import { RequiresRecreationEnum } from "./requiresrecreationenum";
/**
 * Information about a change to a resource attribute.
**/
export declare class ResourceTargetDefinition extends SpeakeasyBase {
    attribute?: ResourceAttributeEnum;
    name?: string;
    requiresRecreation?: RequiresRecreationEnum;
}
