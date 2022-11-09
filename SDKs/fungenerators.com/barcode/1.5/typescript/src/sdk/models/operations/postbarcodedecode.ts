import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBarcodeDecodeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=barimage;" })
  barimage: Uint8Array;
}


export class PostBarcodeDecodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PostBarcodeDecodeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PostBarcodeDecodeRequestBody;

  @Metadata()
  security: PostBarcodeDecodeSecurity;
}


export class PostBarcodeDecodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
