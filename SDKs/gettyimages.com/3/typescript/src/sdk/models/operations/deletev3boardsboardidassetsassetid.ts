import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteV3BoardsBoardIdAssetsAssetIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class DeleteV3BoardsBoardIdAssetsAssetIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV3BoardsBoardIdAssetsAssetIdPathParams;
}


export class DeleteV3BoardsBoardIdAssetsAssetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
