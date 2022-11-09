import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PullsCheckIfMergedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCheckIfMergedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsCheckIfMergedPathParams;
}


export class PullsCheckIfMergedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
