import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListRunnerApplicationsForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsListRunnerApplicationsForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListRunnerApplicationsForOrgPathParams;
}


export class ActionsListRunnerApplicationsForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.RunnerApplication })
  runnerApplications?: shared.RunnerApplication[];
}
