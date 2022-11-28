import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdvancedBoxScoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gameId" })
  gameId: number;
}


export class GetAdvancedBoxScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAdvancedBoxScoreQueryParams;
}


export class GetAdvancedBoxScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boxScore?: shared.BoxScore;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
