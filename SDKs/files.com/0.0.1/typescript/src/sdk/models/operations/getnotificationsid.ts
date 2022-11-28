import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetNotificationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNotificationsIdPathParams;
}


export class GetNotificationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notificationEntity?: shared.NotificationEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
