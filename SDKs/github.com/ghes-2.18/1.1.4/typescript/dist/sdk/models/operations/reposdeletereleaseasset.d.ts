import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReposDeleteReleaseAssetPathParams extends SpeakeasyBase {
    assetId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteReleaseAssetRequest extends SpeakeasyBase {
    pathParams: ReposDeleteReleaseAssetPathParams;
}
export declare class ReposDeleteReleaseAssetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
