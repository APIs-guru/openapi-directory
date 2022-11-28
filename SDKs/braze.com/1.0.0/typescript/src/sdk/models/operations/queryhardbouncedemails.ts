import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryHardBouncedEmailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}


export class QueryHardBouncedEmailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QueryHardBouncedEmailsQueryParams;
}


export class QueryHardBouncedEmailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
