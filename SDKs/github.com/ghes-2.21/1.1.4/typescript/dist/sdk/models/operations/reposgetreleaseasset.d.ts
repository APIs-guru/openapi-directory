import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetReleaseAssetPathParams extends SpeakeasyBase {
    assetId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetReleaseAsset415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposGetReleaseAssetRequest extends SpeakeasyBase {
    pathParams: ReposGetReleaseAssetPathParams;
}
export declare class ReposGetReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    releaseAsset?: shared.ReleaseAsset;
    reposGetReleaseAsset415ApplicationJsonObject?: ReposGetReleaseAsset415ApplicationJson;
}
