import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomersGetAccountTransPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class CustomersGetAccountTransRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CustomersGetAccountTransPathParams;
}


export class CustomersGetAccountTransResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccountTranDto })
  accountTranDtos?: shared.AccountTranDto[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
