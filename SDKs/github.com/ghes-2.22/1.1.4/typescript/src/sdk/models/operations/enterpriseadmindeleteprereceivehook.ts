import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseAdminDeletePreReceiveHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminDeletePreReceiveHookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminDeletePreReceiveHookPathParams;
}


export class EnterpriseAdminDeletePreReceiveHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
