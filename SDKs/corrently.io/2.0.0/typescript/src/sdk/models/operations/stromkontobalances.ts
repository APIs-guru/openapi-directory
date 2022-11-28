import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StromkontoBalancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class StromkontoBalancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StromkontoBalancesQueryParams;
}


export class StromkontoBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Balance })
  balances?: shared.Balance[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
