import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams;
}


export class EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
