import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersGetOpeningBalanceListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class SuppliersGetOpeningBalanceListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuppliersGetOpeningBalanceListPathParams;
}


export class SuppliersGetOpeningBalanceListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.OwnerOpeningBalanceDto })
  ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];

  @Metadata()
  statusCode: number;
}
