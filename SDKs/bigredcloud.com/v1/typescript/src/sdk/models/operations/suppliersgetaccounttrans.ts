import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SuppliersGetAccountTransPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: number;
}


export class SuppliersGetAccountTransRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SuppliersGetAccountTransPathParams;
}


export class SuppliersGetAccountTransResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccountTranDto })
  accountTranDtos?: shared.AccountTranDto[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
