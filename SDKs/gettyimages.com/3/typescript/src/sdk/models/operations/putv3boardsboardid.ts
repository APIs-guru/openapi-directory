import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutV3BoardsBoardIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PutV3BoardsBoardIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutV3BoardsBoardIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.BoardInfo;
}


export class PutV3BoardsBoardIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
