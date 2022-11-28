import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aspect_filter" })
  aspectFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category_ids" })
  categoryIds?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldgroups" })
  fieldgroups?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class SearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchQueryParams;

  @SpeakeasyMetadata()
  security: SearchSecurity;
}


export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productSearchResponse?: shared.ProductSearchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
