import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminGetPreReceiveHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminGetPreReceiveHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminGetPreReceiveHookPathParams;
}


export class EnterpriseAdminGetPreReceiveHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preReceiveHook?: shared.PreReceiveHook;
}
