import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SuppliersGetAccountTransPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class SuppliersGetAccountTransRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SuppliersGetAccountTransPathParams;
}


export class SuppliersGetAccountTransResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccountTranDto })
  accountTranDtos?: shared.AccountTranDto[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
