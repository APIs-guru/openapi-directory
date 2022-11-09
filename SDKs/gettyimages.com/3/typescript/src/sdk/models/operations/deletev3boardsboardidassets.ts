import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteV3BoardsBoardIdAssetsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=board_id" })
  boardId: string;
}


export class DeleteV3BoardsBoardIdAssetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_ids" })
  assetIds?: string[];
}


export class DeleteV3BoardsBoardIdAssetsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteV3BoardsBoardIdAssetsPathParams;

  @Metadata()
  queryParams: DeleteV3BoardsBoardIdAssetsQueryParams;
}


export class DeleteV3BoardsBoardIdAssetsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
