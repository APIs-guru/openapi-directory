import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainsTldZoneIdSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone_id" })
  zoneId: string;
}


export class GetDomainsTldZoneIdSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=A" })
  a?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CNAME" })
  cname?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MX" })
  mx?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NS" })
  ns?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TXT" })
  txt?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isDead" })
  isDead?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetDomainsTldZoneIdSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDomainsTldZoneIdSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDomainsTldZoneIdSearchQueryParams;
}


export class GetDomainsTldZoneIdSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchResults?: shared.SearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
