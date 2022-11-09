import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListGlobalRulesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    ruleTypes?: shared.RuleTypeEnum[];
    statusCode: number;
}
