import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWinProbabilityDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gameId" })
  gameId: number;
}


export class GetWinProbabilityDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWinProbabilityDataQueryParams;
}


export class GetWinProbabilityDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PlayWp })
  playWps?: shared.PlayWp[];

  @SpeakeasyMetadata()
  statusCode: number;
}
