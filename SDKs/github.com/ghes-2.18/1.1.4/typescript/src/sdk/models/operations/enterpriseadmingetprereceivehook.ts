import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetPreReceiveHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminGetPreReceiveHookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetPreReceiveHookPathParams;
}


export class EnterpriseAdminGetPreReceiveHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preReceiveHook?: shared.PreReceiveHook;
}
