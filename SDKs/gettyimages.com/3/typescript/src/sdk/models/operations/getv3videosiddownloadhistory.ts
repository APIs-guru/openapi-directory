import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3VideosIdDownloadhistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdDownloadhistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=company_downloads" })
  companyDownloads?: boolean;
}


export class GetV3VideosIdDownloadhistoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdDownloadhistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3VideosIdDownloadhistoryPathParams;

  @Metadata()
  queryParams: GetV3VideosIdDownloadhistoryQueryParams;

  @Metadata()
  headers: GetV3VideosIdDownloadhistoryHeaders;
}


export class GetV3VideosIdDownloadhistoryResponse extends SpeakeasyBase {
  @Metadata()
  assetDownloadHistoryResults?: shared.AssetDownloadHistoryResults;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
