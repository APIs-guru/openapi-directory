import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGamePpaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetGamePpaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGamePpaQueryParams;
}


export class GetGamePpaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GamePpa })
  gamePpas?: shared.GamePpa[];

  @SpeakeasyMetadata()
  statusCode: number;
}
