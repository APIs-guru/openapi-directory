import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlayerSeasonPpaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playerId" })
  playerId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=threshold" })
  threshold?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetPlayerSeasonPpaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlayerSeasonPpaQueryParams;
}


export class GetPlayerSeasonPpaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayerSeasonPpa })
  playerSeasonPpas?: shared.PlayerSeasonPpa[];

  @Metadata()
  statusCode: number;
}
