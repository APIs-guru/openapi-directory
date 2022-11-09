import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWinProbabilityDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=gameId" })
  gameId: number;
}


export class GetWinProbabilityDataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWinProbabilityDataQueryParams;
}


export class GetWinProbabilityDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PlayWp })
  playWps?: shared.PlayWp[];

  @Metadata()
  statusCode: number;
}
