import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlayerGamePpaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playerId" })
  playerId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetPlayerGamePpaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlayerGamePpaQueryParams;
}


export class GetPlayerGamePpaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PlayerGamePpa })
  playerGamePpas?: shared.PlayerGamePpa[];

  @SpeakeasyMetadata()
  statusCode: number;
}
