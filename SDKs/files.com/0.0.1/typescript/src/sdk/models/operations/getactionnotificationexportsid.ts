import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetActionNotificationExportsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetActionNotificationExportsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetActionNotificationExportsIdPathParams;
}


export class GetActionNotificationExportsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionNotificationExportEntity?: shared.ActionNotificationExportEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
