import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateArtifactStatePathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class UpdateArtifactStateRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactStatePathParams;
    request: shared.UpdateState;
}
export declare class UpdateArtifactStateResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
