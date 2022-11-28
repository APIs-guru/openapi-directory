import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdvancedTeamSeasonStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endWeek" })
  endWeek?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startWeek" })
  startWeek?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetAdvancedTeamSeasonStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAdvancedTeamSeasonStatsQueryParams;
}


export class GetAdvancedTeamSeasonStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AdvancedSeasonStat })
  advancedSeasonStats?: shared.AdvancedSeasonStat[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
