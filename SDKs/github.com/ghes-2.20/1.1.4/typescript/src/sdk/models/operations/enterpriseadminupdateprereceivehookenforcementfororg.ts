import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_downstream_configuration" })
  allowDownstreamConfiguration?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforcement" })
  enforcement?: string;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
