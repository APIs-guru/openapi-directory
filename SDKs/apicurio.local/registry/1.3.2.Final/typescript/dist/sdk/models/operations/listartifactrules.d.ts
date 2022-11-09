import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListArtifactRulesPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class ListArtifactRulesRequest extends SpeakeasyBase {
    pathParams: ListArtifactRulesPathParams;
}
export declare class ListArtifactRulesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    ruleTypes?: shared.RuleTypeEnum[];
    statusCode: number;
}
