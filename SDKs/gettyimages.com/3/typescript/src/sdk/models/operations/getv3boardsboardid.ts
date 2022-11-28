import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3BoardsBoardIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class GetV3BoardsBoardIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV3BoardsBoardIdPathParams;
}


export class GetV3BoardsBoardIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boardDetail?: shared.BoardDetail;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
