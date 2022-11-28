import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_filtered" })
  isFiltered?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetEventsQueryParams;
}


export class GetGetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
