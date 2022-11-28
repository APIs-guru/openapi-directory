import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListRunnerApplicationsForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListRunnerApplicationsForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListRunnerApplicationsForOrgPathParams;
}


export class ActionsListRunnerApplicationsForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.RunnerApplication })
  runnerApplications?: shared.RunnerApplication[];
}
