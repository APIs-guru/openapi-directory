import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPregameWinProbabilitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetPregameWinProbabilitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPregameWinProbabilitiesQueryParams;
}


export class GetPregameWinProbabilitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PregameWp })
  pregameWps?: shared.PregameWp[];

  @Metadata()
  statusCode: number;
}
