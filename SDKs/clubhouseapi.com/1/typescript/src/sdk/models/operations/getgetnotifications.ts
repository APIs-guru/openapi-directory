import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGetNotificationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGetNotificationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetNotificationsQueryParams;
}


export class GetGetNotificationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
