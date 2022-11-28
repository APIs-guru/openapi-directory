import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=away" })
  away?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gameId" })
  gameId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=home" })
  home?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetLinesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLinesQueryParams;
}


export class GetLinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GameLines })
  gameLines?: shared.GameLines[];

  @SpeakeasyMetadata()
  statusCode: number;
}
