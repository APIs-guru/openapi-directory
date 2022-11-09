import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminCreatePreReceiveHookRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @Metadata({ data: "json, name=enforcement" })
  enforcement?: string;

  @Metadata({ data: "json, name=environment" })
  environment: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=script" })
  script: string;

  @Metadata({ data: "json, name=script_repository" })
  scriptRepository: Map<string, any>;
}


export class EnterpriseAdminCreatePreReceiveHookRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminCreatePreReceiveHookRequestBody;
}


export class EnterpriseAdminCreatePreReceiveHookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  preReceiveHook?: shared.PreReceiveHook;
}
