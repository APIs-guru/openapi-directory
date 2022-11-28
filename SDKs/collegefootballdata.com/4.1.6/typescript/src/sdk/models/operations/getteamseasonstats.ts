import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamSeasonStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endWeek" })
  endWeek?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startWeek" })
  startWeek?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetTeamSeasonStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTeamSeasonStatsQueryParams;
}


export class GetTeamSeasonStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamSeasonStat })
  teamSeasonStats?: shared.TeamSeasonStat[];
}
