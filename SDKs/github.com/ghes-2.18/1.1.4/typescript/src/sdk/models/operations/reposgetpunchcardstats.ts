import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposGetPunchCardStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetPunchCardStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetPunchCardStatsPathParams;
}


export class ReposGetPunchCardStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  codeFrequencyStats?: number[][];
}
