import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomersGetOpeningBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetOpeningBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomersGetOpeningBalancePathParams;
}


export class CustomersGetOpeningBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
