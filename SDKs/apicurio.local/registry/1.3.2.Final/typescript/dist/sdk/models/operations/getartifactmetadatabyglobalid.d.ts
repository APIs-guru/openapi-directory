import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetArtifactMetaDataByGlobalIdPathParams extends SpeakeasyBase {
    globalId: number;
}
export declare class GetArtifactMetaDataByGlobalIdRequest extends SpeakeasyBase {
    pathParams: GetArtifactMetaDataByGlobalIdPathParams;
}
export declare class GetArtifactMetaDataByGlobalIdResponse extends SpeakeasyBase {
    artifactMetaData?: shared.ArtifactMetaData;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
