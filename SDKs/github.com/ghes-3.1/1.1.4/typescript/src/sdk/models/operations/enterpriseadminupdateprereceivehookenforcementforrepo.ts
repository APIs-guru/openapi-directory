import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Testing = "testing"
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcement" })
  enforcement?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
