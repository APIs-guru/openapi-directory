import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QueryHardBouncedEmailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=end_date" })
  endDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_date" })
  startDate?: string;
}


export class QueryHardBouncedEmailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QueryHardBouncedEmailsQueryParams;
}


export class QueryHardBouncedEmailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
