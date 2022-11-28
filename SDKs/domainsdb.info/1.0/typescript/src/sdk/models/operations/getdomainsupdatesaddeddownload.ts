import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainsUpdatesAddedDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetDomainsUpdatesAddedDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDomainsUpdatesAddedDownloadQueryParams;
}


export class GetDomainsUpdatesAddedDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
