import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdvancedTeamGameStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=opponent" })
  opponent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetAdvancedTeamGameStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAdvancedTeamGameStatsQueryParams;
}


export class GetAdvancedTeamGameStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AdvancedGameStat })
  advancedGameStats?: shared.AdvancedGameStat[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
