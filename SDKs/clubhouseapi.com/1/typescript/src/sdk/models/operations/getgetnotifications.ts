import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGetNotificationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetGetNotificationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetNotificationsQueryParams;
}


export class GetGetNotificationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
