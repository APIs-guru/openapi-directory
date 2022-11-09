import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAccountsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=asset_type" })
  assetType?: shared.AssetTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=identifier" })
  identifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=take" })
  take?: number;
}


export class GetAccountsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAccountsQueryParams;
}


export class GetAccountsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Account })
  accounts?: shared.Account[];

  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
