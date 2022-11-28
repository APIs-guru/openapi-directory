import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainsUpdatesDeletedDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetDomainsUpdatesDeletedDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDomainsUpdatesDeletedDownloadQueryParams;
}


export class GetDomainsUpdatesDeletedDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
