import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnterpriseAdminGetPreReceiveHookForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id" })
  preReceiveHookId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class EnterpriseAdminGetPreReceiveHookForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnterpriseAdminGetPreReceiveHookForRepoPathParams;
}


export class EnterpriseAdminGetPreReceiveHookForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  repositoryPreReceiveHook?: shared.RepositoryPreReceiveHook;
}
