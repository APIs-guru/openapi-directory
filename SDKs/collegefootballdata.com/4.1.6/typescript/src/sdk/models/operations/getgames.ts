import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGamesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=away" })
  away?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=home" })
  home?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetGamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGamesQueryParams;
}


export class GetGamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Game })
  games?: shared.Game[];

  @SpeakeasyMetadata()
  statusCode: number;
}
