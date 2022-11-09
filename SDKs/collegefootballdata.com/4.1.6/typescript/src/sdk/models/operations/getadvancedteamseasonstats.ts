import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdvancedTeamSeasonStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endWeek" })
  endWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startWeek" })
  startWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetAdvancedTeamSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAdvancedTeamSeasonStatsQueryParams;
}


export class GetAdvancedTeamSeasonStatsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AdvancedSeasonStat })
  advancedSeasonStats?: shared.AdvancedSeasonStat[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
