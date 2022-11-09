import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryListOfUnsubscribedEmailAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}


export class QueryListOfUnsubscribedEmailAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QueryListOfUnsubscribedEmailAddressesQueryParams;
}


export class QueryListOfUnsubscribedEmailAddressesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
