import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetArtifactVersionMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    version: number;
}
export declare class GetArtifactVersionMetaDataRequest extends SpeakeasyBase {
    pathParams: GetArtifactVersionMetaDataPathParams;
}
export declare class GetArtifactVersionMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    versionMetaData?: shared.VersionMetaData;
}
