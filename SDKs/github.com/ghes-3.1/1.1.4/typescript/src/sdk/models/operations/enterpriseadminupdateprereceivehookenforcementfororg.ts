import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @Metadata({ data: "json, name=enforcement" })
  enforcement?: string;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
