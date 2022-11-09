import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateArtifactVersionStatePathParams extends SpeakeasyBase {
    artifactId: string;
    version: number;
}
export declare class UpdateArtifactVersionStateRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactVersionStatePathParams;
    request: shared.UpdateState;
}
export declare class UpdateArtifactVersionStateResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
