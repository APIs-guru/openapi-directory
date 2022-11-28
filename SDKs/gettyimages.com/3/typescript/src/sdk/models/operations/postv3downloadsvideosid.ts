import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostV3DownloadsVideosIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostV3DownloadsVideosIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=auto_download" })
  autoDownload?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=product_id" })
  productId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_team_credits" })
  useTeamCredits?: boolean;
}


export class PostV3DownloadsVideosIdHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class PostV3DownloadsVideosIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  premiumAccessDownloadData?: shared.PremiumAccessDownloadData;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  premiumAccessDownloadData1?: shared.PremiumAccessDownloadData;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  premiumAccessDownloadData2?: shared.PremiumAccessDownloadData;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  premiumAccessDownloadData3?: shared.PremiumAccessDownloadData;
}


export class PostV3DownloadsVideosIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostV3DownloadsVideosIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostV3DownloadsVideosIdQueryParams;

  @SpeakeasyMetadata()
  headers: PostV3DownloadsVideosIdHeaders;

  @SpeakeasyMetadata()
  request?: PostV3DownloadsVideosIdRequests;
}


export class PostV3DownloadsVideosIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
