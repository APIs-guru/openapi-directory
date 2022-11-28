import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BankAccountsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class BankAccountsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BankAccountsPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BankAccountDto;
}


export class BankAccountsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccountsPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
