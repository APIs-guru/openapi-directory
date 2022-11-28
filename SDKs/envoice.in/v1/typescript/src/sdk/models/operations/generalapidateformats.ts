import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GeneralApiDateFormatsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class GeneralApiDateFormatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GeneralApiDateFormatsHeaders;
}


export class GeneralApiDateFormatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  generalApiDateFormats200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  generalApiDateFormats200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
