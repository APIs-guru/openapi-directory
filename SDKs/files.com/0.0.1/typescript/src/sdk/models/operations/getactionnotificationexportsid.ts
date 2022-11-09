import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetActionNotificationExportsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetActionNotificationExportsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetActionNotificationExportsIdPathParams;
}


export class GetActionNotificationExportsIdResponse extends SpeakeasyBase {
  @Metadata()
  actionNotificationExportEntity?: shared.ActionNotificationExportEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
