import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
,    Testing = "testing"
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforcement" })
  enforcement?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody;
}


export class EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
