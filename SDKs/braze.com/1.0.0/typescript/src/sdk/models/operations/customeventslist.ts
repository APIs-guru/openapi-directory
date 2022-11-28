import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomEventsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class CustomEventsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CustomEventsListQueryParams;
}


export class CustomEventsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
