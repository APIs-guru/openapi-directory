import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutV3BoardsBoardIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PutV3BoardsBoardIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV3BoardsBoardIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.BoardInfo;
}


export class PutV3BoardsBoardIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
