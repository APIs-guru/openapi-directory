import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_filtered" })
  isFiltered?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetEventsQueryParams;
}


export class GetGetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
