import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams;
}


export class EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
