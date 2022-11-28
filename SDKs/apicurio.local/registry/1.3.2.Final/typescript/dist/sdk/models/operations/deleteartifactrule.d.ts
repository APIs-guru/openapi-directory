import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteArtifactRuleRuleEnum {
    Validity = "VALIDITY",
    Compatibility = "COMPATIBILITY"
}
export declare class DeleteArtifactRulePathParams extends SpeakeasyBase {
    artifactId: string;
    rule: DeleteArtifactRuleRuleEnum;
}
export declare class DeleteArtifactRuleRequest extends SpeakeasyBase {
    pathParams: DeleteArtifactRulePathParams;
}
export declare class DeleteArtifactRuleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
