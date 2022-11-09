import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSearchDomainItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=A" })
  a?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CNAME" })
  cname?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MX" })
  mx?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NS" })
  ns?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TXT" })
  txt?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date" })
  date?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isDead" })
  isDead?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=zone" })
  zone?: string;
}


export class GetSearchDomainItemRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSearchDomainItemQueryParams;
}


export class GetSearchDomainItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  searchResults?: shared.SearchResults;

  @Metadata()
  statusCode: number;
}
