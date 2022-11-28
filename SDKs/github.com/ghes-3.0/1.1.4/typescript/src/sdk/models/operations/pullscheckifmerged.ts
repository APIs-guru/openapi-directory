import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PullsCheckIfMergedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pull_number" })
  pullNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCheckIfMergedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsCheckIfMergedPathParams;
}


export class PullsCheckIfMergedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
