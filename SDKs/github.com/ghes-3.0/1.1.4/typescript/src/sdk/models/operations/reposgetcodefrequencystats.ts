import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposGetCodeFrequencyStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCodeFrequencyStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetCodeFrequencyStatsPathParams;
}


export class ReposGetCodeFrequencyStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  codeFrequencyStats?: number[][];

  @Metadata()
  reposGetCodeFrequencyStats202ApplicationJsonObject?: Map<string, any>;
}
