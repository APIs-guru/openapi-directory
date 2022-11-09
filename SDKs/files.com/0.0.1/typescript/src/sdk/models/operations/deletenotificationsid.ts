import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNotificationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteNotificationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNotificationsIdPathParams;
}


export class DeleteNotificationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
