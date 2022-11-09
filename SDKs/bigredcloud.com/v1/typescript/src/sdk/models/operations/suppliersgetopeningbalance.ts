import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersGetOpeningBalancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class SuppliersGetOpeningBalanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuppliersGetOpeningBalancePathParams;
}


export class SuppliersGetOpeningBalanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;

  @Metadata()
  statusCode: number;
}
