import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuppliersGetOpeningBalanceListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class SuppliersGetOpeningBalanceListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuppliersGetOpeningBalanceListPathParams;
}


export class SuppliersGetOpeningBalanceListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.OwnerOpeningBalanceDto })
  ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];

  @SpeakeasyMetadata()
  statusCode: number;
}
