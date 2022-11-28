import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutV3BoardsBoardIdAssetsAssetIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PutV3BoardsBoardIdAssetsAssetIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutV3BoardsBoardIdAssetsAssetIdPathParams;
}


export class PutV3BoardsBoardIdAssetsAssetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
