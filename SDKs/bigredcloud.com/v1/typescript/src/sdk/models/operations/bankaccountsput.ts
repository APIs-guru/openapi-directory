import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BankAccountsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class BankAccountsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BankAccountsPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BankAccountDto;
}


export class BankAccountsPutResponse extends SpeakeasyBase {
  @Metadata()
  bankAccountsPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
