import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListReleaseAssetsPathParams extends SpeakeasyBase {
    owner: string;
    releaseId: number;
    repo: string;
}
export declare class ReposListReleaseAssetsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListReleaseAssetsRequest extends SpeakeasyBase {
    pathParams: ReposListReleaseAssetsPathParams;
    queryParams: ReposListReleaseAssetsQueryParams;
}
export declare class ReposListReleaseAssetsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    releaseAssets?: shared.ReleaseAsset[];
}
