import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListRunnerApplicationsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListRunnerApplicationsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListRunnerApplicationsForRepoPathParams;
}


export class ActionsListRunnerApplicationsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.RunnerApplication })
  runnerApplications?: shared.RunnerApplication[];
}
