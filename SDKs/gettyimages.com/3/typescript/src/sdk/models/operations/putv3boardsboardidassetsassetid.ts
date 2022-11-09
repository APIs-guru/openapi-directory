import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutV3BoardsBoardIdAssetsAssetIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class PutV3BoardsBoardIdAssetsAssetIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutV3BoardsBoardIdAssetsAssetIdPathParams;
}


export class PutV3BoardsBoardIdAssetsAssetIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
