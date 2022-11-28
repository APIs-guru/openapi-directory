import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateArtifactVersionMetaDataPathParams extends SpeakeasyBase {
    artifactId: string;
    version: number;
}
export declare class UpdateArtifactVersionMetaDataRequest extends SpeakeasyBase {
    pathParams: UpdateArtifactVersionMetaDataPathParams;
    request: shared.EditableMetaData;
}
export declare class UpdateArtifactVersionMetaDataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
