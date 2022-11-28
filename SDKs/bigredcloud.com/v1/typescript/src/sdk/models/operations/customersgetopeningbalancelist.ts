import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomersGetOpeningBalanceListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetOpeningBalanceListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomersGetOpeningBalanceListPathParams;
}


export class CustomersGetOpeningBalanceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.OwnerOpeningBalanceDto })
  ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
