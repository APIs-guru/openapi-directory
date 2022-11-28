import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPregameWinProbabilitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetPregameWinProbabilitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPregameWinProbabilitiesQueryParams;
}


export class GetPregameWinProbabilitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PregameWp })
  pregameWps?: shared.PregameWp[];

  @SpeakeasyMetadata()
  statusCode: number;
}
