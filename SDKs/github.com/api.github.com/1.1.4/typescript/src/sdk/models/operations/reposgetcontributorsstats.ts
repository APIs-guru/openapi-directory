import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetContributorsStatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetContributorsStatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetContributorsStatsPathParams;
}


export class ReposGetContributorsStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.ContributorActivity })
  contributorActivities?: shared.ContributorActivity[];
}
