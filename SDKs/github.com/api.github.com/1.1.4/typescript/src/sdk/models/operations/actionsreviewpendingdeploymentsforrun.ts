import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsReviewPendingDeploymentsForRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}

export enum ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum {
    Approved = "approved",
    Rejected = "rejected"
}


export class ActionsReviewPendingDeploymentsForRunRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=environment_ids" })
  environmentIds: number[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum;
}


export class ActionsReviewPendingDeploymentsForRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsReviewPendingDeploymentsForRunPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsReviewPendingDeploymentsForRunRequestBody;
}


export class ActionsReviewPendingDeploymentsForRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Deployment })
  deployments?: shared.Deployment[];
}
