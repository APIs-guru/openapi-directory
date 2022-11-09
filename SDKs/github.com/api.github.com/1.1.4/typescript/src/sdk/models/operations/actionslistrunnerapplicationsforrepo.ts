import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListRunnerApplicationsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListRunnerApplicationsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListRunnerApplicationsForRepoPathParams;
}


export class ActionsListRunnerApplicationsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.RunnerApplication })
  runnerApplications?: shared.RunnerApplication[];
}
