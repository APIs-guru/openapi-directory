import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=aspect_filter" })
  aspectFilter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=category_ids" })
  categoryIds?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fieldgroups" })
  fieldgroups?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gtin" })
  gtin?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mpn" })
  mpn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class SearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class SearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchQueryParams;

  @Metadata()
  security: SearchSecurity;
}


export class SearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  productSearchResponse?: shared.ProductSearchResponse;

  @Metadata()
  statusCode: number;
}
