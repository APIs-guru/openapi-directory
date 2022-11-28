import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
/**
 * <p/>
**/
export declare class OptionGroup extends SpeakeasyBase {
    allowsVpcAndNonVpcInstanceMemberships?: boolean;
    engineName?: string;
    majorEngineVersion?: string;
    optionGroupArn?: string;
    optionGroupDescription?: string;
    optionGroupName?: string;
    options?: Option[];
    vpcId?: string;
}
