import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGameMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetGameMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGameMediaQueryParams;
}


export class GetGameMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.GameMedia })
  gameMedias?: shared.GameMedia[];

  @SpeakeasyMetadata()
  statusCode: number;
}
