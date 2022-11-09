import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlayerSeasonStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endWeek" })
  endWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startWeek" })
  startWeek?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetPlayerSeasonStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlayerSeasonStatsQueryParams;
}


export class GetPlayerSeasonStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayerSeasonStat })
  playerSeasonStats?: shared.PlayerSeasonStat[];

  @Metadata()
  statusCode: number;
}
