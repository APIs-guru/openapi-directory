import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteV3BoardsBoardIdAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class DeleteV3BoardsBoardIdAssetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_ids" })
  assetIds?: string[];
}


export class DeleteV3BoardsBoardIdAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteV3BoardsBoardIdAssetsPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteV3BoardsBoardIdAssetsQueryParams;
}


export class DeleteV3BoardsBoardIdAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
