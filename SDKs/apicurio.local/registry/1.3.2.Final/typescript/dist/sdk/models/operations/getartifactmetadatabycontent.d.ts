import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetArtifactMetaDataByContentPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class GetArtifactMetaDataByContentRequest extends SpeakeasyBase {
    pathParams: GetArtifactMetaDataByContentPathParams;
    request: Uint8Array;
}
export declare class GetArtifactMetaDataByContentResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
