import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlayerUsageQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetPlayerUsageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlayerUsageQueryParams;
}


export class GetPlayerUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayerUsage })
  playerUsages?: shared.PlayerUsage[];

  @Metadata()
  statusCode: number;
}
