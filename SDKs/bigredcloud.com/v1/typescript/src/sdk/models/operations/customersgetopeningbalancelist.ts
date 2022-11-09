import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersGetOpeningBalanceListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetOpeningBalanceListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CustomersGetOpeningBalanceListPathParams;
}


export class CustomersGetOpeningBalanceListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.OwnerOpeningBalanceDto })
  ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];

  @Metadata()
  statusCode: number;
}
