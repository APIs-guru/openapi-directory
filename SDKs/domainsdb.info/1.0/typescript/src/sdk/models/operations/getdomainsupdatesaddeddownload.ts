import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainsUpdatesAddedDownloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetDomainsUpdatesAddedDownloadRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDomainsUpdatesAddedDownloadQueryParams;
}


export class GetDomainsUpdatesAddedDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
