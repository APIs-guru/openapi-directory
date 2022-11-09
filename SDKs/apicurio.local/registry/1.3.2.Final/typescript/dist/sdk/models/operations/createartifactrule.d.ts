import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateArtifactRulePathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class CreateArtifactRuleRequest extends SpeakeasyBase {
    pathParams: CreateArtifactRulePathParams;
    request: shared.Rule;
}
export declare class CreateArtifactRuleResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
