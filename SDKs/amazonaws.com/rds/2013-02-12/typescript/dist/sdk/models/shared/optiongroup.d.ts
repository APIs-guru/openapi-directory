import { SpeakeasyBase } from "../../../internal/utils";
import { Option } from "./option";
export declare class OptionGroup extends SpeakeasyBase {
    allowsVpcAndNonVpcInstanceMemberships?: boolean;
    engineName?: string;
    majorEngineVersion?: string;
    optionGroupDescription?: string;
    optionGroupName?: string;
    options?: Option[];
    vpcId?: string;
}
