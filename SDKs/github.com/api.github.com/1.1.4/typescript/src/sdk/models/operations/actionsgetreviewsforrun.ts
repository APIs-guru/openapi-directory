import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetReviewsForRunPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=run_id" })
  runId: number;
}


export class ActionsGetReviewsForRunRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetReviewsForRunPathParams;
}


export class ActionsGetReviewsForRunResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.EnvironmentApprovals })
  environmentApprovals?: shared.EnvironmentApprovals[];
}
