import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteV3BoardsBoardIdAssetsAssetIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class DeleteV3BoardsBoardIdAssetsAssetIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteV3BoardsBoardIdAssetsAssetIdPathParams;
}


export class DeleteV3BoardsBoardIdAssetsAssetIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
