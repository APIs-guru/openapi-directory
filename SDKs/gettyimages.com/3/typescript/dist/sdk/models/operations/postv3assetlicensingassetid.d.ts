import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostV3AssetLicensingAssetIdPathParams extends SpeakeasyBase {
    assetId: string;
}
export declare class PostV3AssetLicensingAssetIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class PostV3AssetLicensingAssetIdRequests extends SpeakeasyBase {
    acquireAssetLicensesRequest?: shared.AcquireAssetLicensesRequest;
    acquireAssetLicensesRequest1?: shared.AcquireAssetLicensesRequest;
    acquireAssetLicensesRequest2?: shared.AcquireAssetLicensesRequest;
    acquireAssetLicensesRequest3?: shared.AcquireAssetLicensesRequest;
}
export declare class PostV3AssetLicensingAssetIdRequest extends SpeakeasyBase {
    pathParams: PostV3AssetLicensingAssetIdPathParams;
    headers: PostV3AssetLicensingAssetIdHeaders;
    request?: PostV3AssetLicensingAssetIdRequests;
}
export declare class PostV3AssetLicensingAssetIdResponse extends SpeakeasyBase {
    assetLicensingResponse?: shared.AssetLicensingResponse;
    contentType: string;
    statusCode: number;
}
