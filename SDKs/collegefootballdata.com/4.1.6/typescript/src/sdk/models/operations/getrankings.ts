import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRankingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetRankingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRankingsQueryParams;
}


export class GetRankingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RankingWeek })
  rankingWeeks?: shared.RankingWeek[];

  @SpeakeasyMetadata()
  statusCode: number;
}
