import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBarcodeDecodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=barimage;" })
  barimage: Uint8Array;
}


export class PostBarcodeDecodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class PostBarcodeDecodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: PostBarcodeDecodeRequestBody;

  @SpeakeasyMetadata()
  security: PostBarcodeDecodeSecurity;
}


export class PostBarcodeDecodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
