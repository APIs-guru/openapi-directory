import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const ReposUploadReleaseAssetServerList: readonly ["https://{origin}"];
export declare class ReposUploadReleaseAssetPathParams extends SpeakeasyBase {
    owner: string;
    releaseId: number;
    repo: string;
}
export declare class ReposUploadReleaseAssetQueryParams extends SpeakeasyBase {
    label?: string;
    name?: string;
}
export declare class ReposUploadReleaseAssetRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ReposUploadReleaseAssetPathParams;
    queryParams: ReposUploadReleaseAssetQueryParams;
    request?: string;
}
export declare class ReposUploadReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    releaseAsset?: shared.ReleaseAsset;
}
