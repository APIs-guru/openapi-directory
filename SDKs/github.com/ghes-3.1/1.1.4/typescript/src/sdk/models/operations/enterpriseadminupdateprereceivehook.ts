import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdatePreReceiveHookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminUpdatePreReceiveHookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @Metadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @Metadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=script" })
  script?: string;

  @Metadata({ data: "json, name=script_repository" })
  scriptRepository?: Map<string, any>;
}


export class EnterpriseAdminUpdatePreReceiveHookRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdatePreReceiveHookPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveHookRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preReceiveHook?: shared.PreReceiveHook;
}
