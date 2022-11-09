import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV3DownloadsImagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostV3DownloadsImagesIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auto_download" })
  autoDownload?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=file_type" })
  fileType?: shared.DownloadFileTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_id" })
  productId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_type" })
  productType?: shared.ProductTypeRequestEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=use_team_credits" })
  useTeamCredits?: boolean;
}


export class PostV3DownloadsImagesIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class PostV3DownloadsImagesIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  premiumAccessDownloadData?: shared.PremiumAccessDownloadData;

  @Metadata({ data: "request, media_type=application/json" })
  premiumAccessDownloadData1?: shared.PremiumAccessDownloadData;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  premiumAccessDownloadData2?: shared.PremiumAccessDownloadData;

  @Metadata({ data: "request, media_type=text/json" })
  premiumAccessDownloadData3?: shared.PremiumAccessDownloadData;
}


export class PostV3DownloadsImagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV3DownloadsImagesIdPathParams;

  @Metadata()
  queryParams: PostV3DownloadsImagesIdQueryParams;

  @Metadata()
  headers: PostV3DownloadsImagesIdHeaders;

  @Metadata()
  request?: PostV3DownloadsImagesIdRequests;
}


export class PostV3DownloadsImagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
