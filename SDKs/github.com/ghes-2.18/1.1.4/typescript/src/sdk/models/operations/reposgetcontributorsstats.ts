import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposGetContributorsStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetContributorsStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposGetContributorsStatsPathParams;
}


export class ReposGetContributorsStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ContributorActivity })
  contributorActivities?: shared.ContributorActivity[];

  @SpeakeasyMetadata()
  reposGetContributorsStats202ApplicationJsonObject?: Map<string, any>;
}
