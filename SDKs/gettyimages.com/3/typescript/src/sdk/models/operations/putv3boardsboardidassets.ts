import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutV3BoardsBoardIdAssetsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PutV3BoardsBoardIdAssetsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutV3BoardsBoardIdAssetsPathParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.BoardAsset })
  request?: shared.BoardAsset[];
}


export class PutV3BoardsBoardIdAssetsResponse extends SpeakeasyBase {
  @Metadata()
  addBoardAssetsResult?: shared.AddBoardAssetsResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
