import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdvancedBoxScoreQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=gameId" })
  gameId: number;
}


export class GetAdvancedBoxScoreRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAdvancedBoxScoreQueryParams;
}


export class GetAdvancedBoxScoreResponse extends SpeakeasyBase {
  @Metadata()
  boxScore?: shared.BoxScore;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
