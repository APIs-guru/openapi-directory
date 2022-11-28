import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryListOfUnsubscribedEmailAddressesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}


export class QueryListOfUnsubscribedEmailAddressesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QueryListOfUnsubscribedEmailAddressesQueryParams;
}


export class QueryListOfUnsubscribedEmailAddressesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
