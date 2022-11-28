import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3VideosIdDownloadhistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3VideosIdDownloadhistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_downloads" })
  companyDownloads?: boolean;
}


export class GetV3VideosIdDownloadhistoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3VideosIdDownloadhistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3VideosIdDownloadhistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3VideosIdDownloadhistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3VideosIdDownloadhistoryHeaders;
}


export class GetV3VideosIdDownloadhistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetDownloadHistoryResults?: shared.AssetDownloadHistoryResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
