import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchDomainItemQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=zone" })
  zone?: string;
}


export class GetSearchDomainItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSearchDomainItemQueryParams;
}


export class GetSearchDomainItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchResults?: shared.SearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
