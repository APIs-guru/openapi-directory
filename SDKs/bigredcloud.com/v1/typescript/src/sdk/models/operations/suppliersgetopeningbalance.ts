import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuppliersGetOpeningBalancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class SuppliersGetOpeningBalanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuppliersGetOpeningBalancePathParams;
}


export class SuppliersGetOpeningBalanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
