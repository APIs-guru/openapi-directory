import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArtifactMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class UpdateArtifactMetaDataRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactMetaDataPathParams;
    request: Uint8Array;
}
export declare class UpdateArtifactMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
