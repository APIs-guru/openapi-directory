import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainsTldZoneIdDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone_id" })
  zoneId: string;
}


export class GetDomainsTldZoneIdDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;
}


export class GetDomainsTldZoneIdDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainsTldZoneIdDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDomainsTldZoneIdDownloadQueryParams;
}


export class GetDomainsTldZoneIdDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
