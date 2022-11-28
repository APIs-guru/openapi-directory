import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposGetPunchCardStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetPunchCardStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetPunchCardStatsPathParams;
}


export class ReposGetPunchCardStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  codeFrequencyStats?: number[][];
}
