import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteV3BoardsBoardIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class DeleteV3BoardsBoardIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV3BoardsBoardIdPathParams;
}


export class DeleteV3BoardsBoardIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
