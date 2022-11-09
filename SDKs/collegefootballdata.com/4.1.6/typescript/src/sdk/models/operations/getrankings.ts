import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRankingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetRankingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRankingsQueryParams;
}


export class GetRankingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RankingWeek })
  rankingWeeks?: shared.RankingWeek[];

  @Metadata()
  statusCode: number;
}
