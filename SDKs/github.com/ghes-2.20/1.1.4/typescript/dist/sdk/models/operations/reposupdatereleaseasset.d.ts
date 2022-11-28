import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposUpdateReleaseAssetPathParams extends SpeakeasyBase {
    assetId: number;
    owner: string;
    repo: string;
}
export declare class ReposUpdateReleaseAssetRequestBody extends SpeakeasyBase {
    label?: string;
    name?: string;
    state?: string;
}
export declare class ReposUpdateReleaseAssetRequest extends SpeakeasyBase {
    pathParams: ReposUpdateReleaseAssetPathParams;
    request?: ReposUpdateReleaseAssetRequestBody;
}
export declare class ReposUpdateReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    releaseAsset?: shared.ReleaseAsset;
}
