import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlayerUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playerId" })
  playerId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=position" })
  position?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetPlayerUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlayerUsageQueryParams;
}


export class GetPlayerUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PlayerUsage })
  playerUsages?: shared.PlayerUsage[];

  @SpeakeasyMetadata()
  statusCode: number;
}
