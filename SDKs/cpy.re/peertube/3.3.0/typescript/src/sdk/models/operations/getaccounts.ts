import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
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
  statusCode: number;
}
