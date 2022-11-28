import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteArtifactVersionMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    version: number;
}
export declare class DeleteArtifactVersionMetaDataRequest extends SpeakeasyBase {
    pathParams: DeleteArtifactVersionMetaDataPathParams;
}
export declare class DeleteArtifactVersionMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
