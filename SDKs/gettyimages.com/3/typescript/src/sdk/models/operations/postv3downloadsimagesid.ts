import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV3DownloadsImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostV3DownloadsImagesIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auto_download" })
  autoDownload?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=file_type" })
  fileType?: shared.DownloadFileTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_id" })
  productId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: shared.ProductTypeRequestEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_team_credits" })
  useTeamCredits?: boolean;
}


export class PostV3DownloadsImagesIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class PostV3DownloadsImagesIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  premiumAccessDownloadData?: shared.PremiumAccessDownloadData;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  premiumAccessDownloadData1?: shared.PremiumAccessDownloadData;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  premiumAccessDownloadData2?: shared.PremiumAccessDownloadData;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  premiumAccessDownloadData3?: shared.PremiumAccessDownloadData;
}


export class PostV3DownloadsImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV3DownloadsImagesIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostV3DownloadsImagesIdQueryParams;

  @SpeakeasyMetadata()
  headers: PostV3DownloadsImagesIdHeaders;

  @SpeakeasyMetadata()
  request?: PostV3DownloadsImagesIdRequests;
}


export class PostV3DownloadsImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
