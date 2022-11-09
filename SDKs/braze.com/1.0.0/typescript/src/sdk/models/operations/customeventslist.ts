import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomEventsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class CustomEventsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CustomEventsListQueryParams;
}


export class CustomEventsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
