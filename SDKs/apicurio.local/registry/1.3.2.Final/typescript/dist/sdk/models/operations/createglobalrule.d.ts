import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateGlobalRuleRequest extends SpeakeasyBase {
    request: shared.Rule;
}
export declare class CreateGlobalRuleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
