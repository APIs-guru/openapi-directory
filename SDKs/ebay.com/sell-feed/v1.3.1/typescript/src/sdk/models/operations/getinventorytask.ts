import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInventoryTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
  taskId: string;
}


export class GetInventoryTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetInventoryTaskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInventoryTaskPathParams;

  @Metadata()
  security: GetInventoryTaskSecurity;
}


export class GetInventoryTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  inventoryTask?: shared.InventoryTask;

  @Metadata()
  statusCode: number;
}
