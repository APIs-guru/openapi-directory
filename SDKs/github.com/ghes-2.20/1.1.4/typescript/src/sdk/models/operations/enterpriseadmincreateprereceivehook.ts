import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminCreatePreReceiveHookRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script: string;

  @SpeakeasyMetadata({ data: "json, name=script_repository" })
  scriptRepository: Map<string, any>;
}


export class EnterpriseAdminCreatePreReceiveHookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreatePreReceiveHookRequestBody;
}


export class EnterpriseAdminCreatePreReceiveHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  preReceiveHook?: shared.PreReceiveHook;
}
