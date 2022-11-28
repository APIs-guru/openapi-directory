import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StromkontoChoicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class StromkontoChoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StromkontoChoicesQueryParams;
}


export class StromkontoChoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Balance })
  balances?: shared.Balance[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
