import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetPendingDeploymentsForRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsGetPendingDeploymentsForRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetPendingDeploymentsForRunPathParams;
}


export class ActionsGetPendingDeploymentsForRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.PendingDeployment })
  pendingDeployments?: shared.PendingDeployment[];
}
