import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV3AssetLicensingAssetIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=assetId" })
  assetId: string;
}


export class PostV3AssetLicensingAssetIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class PostV3AssetLicensingAssetIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  acquireAssetLicensesRequest?: shared.AcquireAssetLicensesRequest;

  @Metadata({ data: "request, media_type=application/json" })
  acquireAssetLicensesRequest1?: shared.AcquireAssetLicensesRequest;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  acquireAssetLicensesRequest2?: shared.AcquireAssetLicensesRequest;

  @Metadata({ data: "request, media_type=text/json" })
  acquireAssetLicensesRequest3?: shared.AcquireAssetLicensesRequest;
}


export class PostV3AssetLicensingAssetIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV3AssetLicensingAssetIdPathParams;

  @Metadata()
  headers: PostV3AssetLicensingAssetIdHeaders;

  @Metadata()
  request?: PostV3AssetLicensingAssetIdRequests;
}


export class PostV3AssetLicensingAssetIdResponse extends SpeakeasyBase {
  @Metadata()
  assetLicensingResponse?: shared.AssetLicensingResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
