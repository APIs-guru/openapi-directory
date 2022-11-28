import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetCommitActivityStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCommitActivityStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetCommitActivityStatsPathParams;
}


export class ReposGetCommitActivityStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.CommitActivity })
  commitActivities?: shared.CommitActivity[];
}
