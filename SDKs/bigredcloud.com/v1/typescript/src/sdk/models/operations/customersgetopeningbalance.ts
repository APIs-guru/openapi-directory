import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersGetOpeningBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetOpeningBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CustomersGetOpeningBalancePathParams;
}


export class CustomersGetOpeningBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;

  @Metadata()
  statusCode: number;
}
