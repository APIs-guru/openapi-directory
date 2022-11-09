import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StromkontoBalancesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class StromkontoBalancesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StromkontoBalancesQueryParams;
}


export class StromkontoBalancesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Balance })
  balances?: shared.Balance[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
