import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RateKeyEnum } from "./ratekeyenum";
import { Tag } from "./tag";
export declare class CreateRateBasedRuleRequest extends SpeakeasyBase {
    changeToken: string;
    metricName: string;
    name: string;
    rateKey: RateKeyEnum;
    rateLimit: number;
    tags?: Tag[];
}
