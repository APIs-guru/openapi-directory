import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInventoryTaskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetInventoryTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetInventoryTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInventoryTaskPathParams;

  @SpeakeasyMetadata()
  security: GetInventoryTaskSecurity;
}


export class GetInventoryTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  inventoryTask?: shared.InventoryTask;

  @SpeakeasyMetadata()
  statusCode: number;
}
