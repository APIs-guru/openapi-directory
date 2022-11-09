import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOrdersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fieldGroups" })
  fieldGroups?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderIds" })
  orderIds?: string;
}


export class GetOrdersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetOrdersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetOrdersQueryParams;

  @Metadata()
  security: GetOrdersSecurity;
}


export class GetOrdersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orderSearchPagedCollection?: shared.OrderSearchPagedCollection;

  @Metadata()
  statusCode: number;
}
