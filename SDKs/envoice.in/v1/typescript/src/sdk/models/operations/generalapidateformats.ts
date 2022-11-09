import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GeneralApiDateFormatsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiDateFormatsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GeneralApiDateFormatsHeaders;
}


export class GeneralApiDateFormatsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  generalApiDateFormats200ApplicationJsonStrings?: string[];

  @Metadata()
  generalApiDateFormats200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
