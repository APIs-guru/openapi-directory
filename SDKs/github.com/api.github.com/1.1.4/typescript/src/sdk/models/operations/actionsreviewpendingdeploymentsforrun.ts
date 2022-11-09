import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsReviewPendingDeploymentsForRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}

export enum ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum {
    Approved = "approved"
,    Rejected = "rejected"
}


export class ActionsReviewPendingDeploymentsForRunRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment: string;

  @Metadata({ data: "json, name=environment_ids" })
  environmentIds: number[];

  @Metadata({ data: "json, name=state" })
  state: ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum;
}


export class ActionsReviewPendingDeploymentsForRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsReviewPendingDeploymentsForRunPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsReviewPendingDeploymentsForRunRequestBody;
}


export class ActionsReviewPendingDeploymentsForRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Deployment })
  deployments?: shared.Deployment[];
}
