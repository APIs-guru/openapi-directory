import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactVersionPathParams extends SpeakeasyBase {
    artifactId: string;
    version: number;
}
export declare class GetArtifactVersionRequest extends SpeakeasyBase {
    pathParams: GetArtifactVersionPathParams;
}
export declare class GetArtifactVersionResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
