import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdatePreReceiveHookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminUpdatePreReceiveHookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;

  @SpeakeasyMetadata({ data: "json, name=script_repository" })
  scriptRepository?: Map<string, any>;
}


export class EnterpriseAdminUpdatePreReceiveHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdatePreReceiveHookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveHookRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preReceiveHook?: shared.PreReceiveHook;
}
