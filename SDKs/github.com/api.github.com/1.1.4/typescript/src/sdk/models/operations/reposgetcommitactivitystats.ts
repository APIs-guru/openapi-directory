import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetCommitActivityStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCommitActivityStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetCommitActivityStatsPathParams;
}


export class ReposGetCommitActivityStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.CommitActivity })
  commitActivities?: shared.CommitActivity[];
}
