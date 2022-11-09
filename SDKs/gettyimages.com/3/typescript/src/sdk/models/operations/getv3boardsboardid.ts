import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3BoardsBoardIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class GetV3BoardsBoardIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV3BoardsBoardIdPathParams;
}


export class GetV3BoardsBoardIdResponse extends SpeakeasyBase {
  @Metadata()
  boardDetail?: shared.BoardDetail;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
