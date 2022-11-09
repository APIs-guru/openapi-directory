import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainsTldZoneIdDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=zone_id" })
  zoneId: string;
}


export class GetDomainsTldZoneIdDownloadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetDomainsTldZoneIdDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainsTldZoneIdDownloadPathParams;

  @Metadata()
  queryParams: GetDomainsTldZoneIdDownloadQueryParams;
}


export class GetDomainsTldZoneIdDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
