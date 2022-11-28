import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteArtifactPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class DeleteArtifactRequest extends SpeakeasyBase {
    pathParams: DeleteArtifactPathParams;
}
export declare class DeleteArtifactResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
