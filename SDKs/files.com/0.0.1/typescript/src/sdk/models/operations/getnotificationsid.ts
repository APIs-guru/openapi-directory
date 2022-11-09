import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetNotificationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNotificationsIdPathParams;
}


export class GetNotificationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  notificationEntity?: shared.NotificationEntity;

  @Metadata()
  statusCode: number;
}
