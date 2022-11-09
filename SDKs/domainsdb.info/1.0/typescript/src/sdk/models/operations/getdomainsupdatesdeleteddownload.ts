import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainsUpdatesDeletedDownloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetDomainsUpdatesDeletedDownloadRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainsUpdatesDeletedDownloadQueryParams;
}


export class GetDomainsUpdatesDeletedDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
