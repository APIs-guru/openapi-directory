import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamSeasonStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endWeek" })
  endWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startWeek" })
  startWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetTeamSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTeamSeasonStatsQueryParams;
}


export class GetTeamSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamSeasonStat })
  teamSeasonStats?: shared.TeamSeasonStat[];
}
