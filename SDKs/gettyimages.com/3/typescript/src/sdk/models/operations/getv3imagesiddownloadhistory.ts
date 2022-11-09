import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3ImagesIdDownloadhistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdDownloadhistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=company_downloads" })
  companyDownloads?: boolean;
}


export class GetV3ImagesIdDownloadhistoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdDownloadhistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3ImagesIdDownloadhistoryPathParams;

  @Metadata()
  queryParams: GetV3ImagesIdDownloadhistoryQueryParams;

  @Metadata()
  headers: GetV3ImagesIdDownloadhistoryHeaders;
}


export class GetV3ImagesIdDownloadhistoryResponse extends SpeakeasyBase {
  @Metadata()
  assetDownloadHistoryResults?: shared.AssetDownloadHistoryResults;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
