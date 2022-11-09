import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetPendingDeploymentsForRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsGetPendingDeploymentsForRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetPendingDeploymentsForRunPathParams;
}


export class ActionsGetPendingDeploymentsForRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.PendingDeployment })
  pendingDeployments?: shared.PendingDeployment[];
}
