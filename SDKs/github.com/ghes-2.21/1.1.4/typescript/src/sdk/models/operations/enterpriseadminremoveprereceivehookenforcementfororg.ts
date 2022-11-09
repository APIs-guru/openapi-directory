import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams;
}


export class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
