import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutV3BoardsBoardIdAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PutV3BoardsBoardIdAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV3BoardsBoardIdAssetsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BoardAsset })
  request?: shared.BoardAsset[];
}


export class PutV3BoardsBoardIdAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addBoardAssetsResult?: shared.AddBoardAssetsResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
