import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactVersionsPathParams extends SpeakeasyBase {
    artifactId: string;
}
export declare class ListArtifactVersionsRequest extends SpeakeasyBase {
    pathParams: ListArtifactVersionsPathParams;
}
export declare class ListArtifactVersionsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    listArtifactVersions200ApplicationJsonInt64Integers?: number[];
}
