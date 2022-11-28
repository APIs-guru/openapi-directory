import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV3AssetLicensingAssetIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;
}


export class PostV3AssetLicensingAssetIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class PostV3AssetLicensingAssetIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  acquireAssetLicensesRequest?: shared.AcquireAssetLicensesRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  acquireAssetLicensesRequest1?: shared.AcquireAssetLicensesRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  acquireAssetLicensesRequest2?: shared.AcquireAssetLicensesRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  acquireAssetLicensesRequest3?: shared.AcquireAssetLicensesRequest;
}


export class PostV3AssetLicensingAssetIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV3AssetLicensingAssetIdPathParams;

  @SpeakeasyMetadata()
  headers: PostV3AssetLicensingAssetIdHeaders;

  @SpeakeasyMetadata()
  request?: PostV3AssetLicensingAssetIdRequests;
}


export class PostV3AssetLicensingAssetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetLicensingResponse?: shared.AssetLicensingResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
