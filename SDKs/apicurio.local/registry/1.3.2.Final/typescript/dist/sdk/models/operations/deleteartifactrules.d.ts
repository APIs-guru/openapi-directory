import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteArtifactRulesPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class DeleteArtifactRulesRequest extends SpeakeasyBase {
    pathParams: DeleteArtifactRulesPathParams;
}
export declare class DeleteArtifactRulesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
