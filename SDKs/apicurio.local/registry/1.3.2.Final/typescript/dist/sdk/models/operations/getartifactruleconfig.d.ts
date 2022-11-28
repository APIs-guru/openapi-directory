import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetArtifactRuleConfigRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class GetArtifactRuleConfigPathParams extends SpeakeasyBase {
    artifactId: string;
    rule: GetArtifactRuleConfigRuleEnum;
}
export declare class GetArtifactRuleConfigRequest extends SpeakeasyBase {
    pathParams: GetArtifactRuleConfigPathParams;
}
export declare class GetArtifactRuleConfigResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    rule?: shared.Rule;
    statusCode: number;
}
