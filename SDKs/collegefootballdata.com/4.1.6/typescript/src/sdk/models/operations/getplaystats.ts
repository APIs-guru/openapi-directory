import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlayStatsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=athleteId" })
  athleteId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=gameId" })
  gameId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=statTypeId" })
  statTypeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetPlayStatsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlayStatsQueryParams;
}


export class GetPlayStatsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayStat })
  playStats?: shared.PlayStat[];

  @Metadata()
  statusCode: number;
}
