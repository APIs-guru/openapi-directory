import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3ImagesIdDownloadhistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV3ImagesIdDownloadhistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=company_downloads" })
  companyDownloads?: boolean;
}


export class GetV3ImagesIdDownloadhistoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3ImagesIdDownloadhistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3ImagesIdDownloadhistoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV3ImagesIdDownloadhistoryQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3ImagesIdDownloadhistoryHeaders;
}


export class GetV3ImagesIdDownloadhistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assetDownloadHistoryResults?: shared.AssetDownloadHistoryResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
