import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_type" })
  assetType?: shared.AssetTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAccountsQueryParams;
}


export class GetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
