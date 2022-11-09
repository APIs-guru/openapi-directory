import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WafAction } from "./wafaction";
import { Tag } from "./tag";
export declare class CreateWebAclRequest extends SpeakeasyBase {
    changeToken: string;
    defaultAction: WafAction;
    metricName: string;
    name: string;
    tags?: Tag[];
}
