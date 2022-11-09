import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostV3DownloadsVideosIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostV3DownloadsVideosIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=auto_download" })
  autoDownload?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=product_id" })
  productId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=use_team_credits" })
  useTeamCredits?: boolean;
}


export class PostV3DownloadsVideosIdHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class PostV3DownloadsVideosIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  premiumAccessDownloadData?: shared.PremiumAccessDownloadData;

  @Metadata({ data: "request, media_type=application/json" })
  premiumAccessDownloadData1?: shared.PremiumAccessDownloadData;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  premiumAccessDownloadData2?: shared.PremiumAccessDownloadData;

  @Metadata({ data: "request, media_type=text/json" })
  premiumAccessDownloadData3?: shared.PremiumAccessDownloadData;
}


export class PostV3DownloadsVideosIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostV3DownloadsVideosIdPathParams;

  @Metadata()
  queryParams: PostV3DownloadsVideosIdQueryParams;

  @Metadata()
  headers: PostV3DownloadsVideosIdHeaders;

  @Metadata()
  request?: PostV3DownloadsVideosIdRequests;
}


export class PostV3DownloadsVideosIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
