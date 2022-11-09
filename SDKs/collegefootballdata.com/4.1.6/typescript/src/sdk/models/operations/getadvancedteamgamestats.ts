import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdvancedTeamGameStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=opponent" })
  opponent?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetAdvancedTeamGameStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAdvancedTeamGameStatsQueryParams;
}


export class GetAdvancedTeamGameStatsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AdvancedGameStat })
  advancedGameStats?: shared.AdvancedGameStat[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
