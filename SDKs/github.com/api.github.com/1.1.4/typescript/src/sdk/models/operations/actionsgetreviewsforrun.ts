import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetReviewsForRunPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsGetReviewsForRunRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetReviewsForRunPathParams;
}


export class ActionsGetReviewsForRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.EnvironmentApprovals })
  environmentApprovals?: shared.EnvironmentApprovals[];
}
