import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminGetPreReceiveHookForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;
}


export class EnterpriseAdminGetPreReceiveHookForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminGetPreReceiveHookForOrgPathParams;
}


export class EnterpriseAdminGetPreReceiveHookForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orgPreReceiveHook?: shared.OrgPreReceiveHook;
}
