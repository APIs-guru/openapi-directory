import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StromkontoChoicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class StromkontoChoicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StromkontoChoicesQueryParams;
}


export class StromkontoChoicesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Balance })
  balances?: shared.Balance[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
