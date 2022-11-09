import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteV3BoardsBoardIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class DeleteV3BoardsBoardIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteV3BoardsBoardIdPathParams;
}


export class DeleteV3BoardsBoardIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
