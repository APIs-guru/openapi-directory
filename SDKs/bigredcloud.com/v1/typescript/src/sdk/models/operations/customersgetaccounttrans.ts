import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomersGetAccountTransPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetAccountTransRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomersGetAccountTransPathParams;
}


export class CustomersGetAccountTransResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccountTranDto })
  accountTranDtos?: shared.AccountTranDto[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
