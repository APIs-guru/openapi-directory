import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGamesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=away" })
  away?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=home" })
  home?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetGamesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGamesQueryParams;
}


export class GetGamesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Game })
  games?: shared.Game[];

  @Metadata()
  statusCode: number;
}
