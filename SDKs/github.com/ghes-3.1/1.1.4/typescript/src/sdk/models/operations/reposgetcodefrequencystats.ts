import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposGetCodeFrequencyStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetCodeFrequencyStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetCodeFrequencyStatsPathParams;
}


export class ReposGetCodeFrequencyStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  codeFrequencyStats?: number[][];

  @SpeakeasyMetadata()
  reposGetCodeFrequencyStats202ApplicationJsonObject?: Map<string, any>;
}
