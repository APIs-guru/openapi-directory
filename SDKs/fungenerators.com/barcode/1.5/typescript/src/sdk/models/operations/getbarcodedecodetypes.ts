import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBarcodeDecodeTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xFungeneratorsApiSecret: shared.SchemeXFungeneratorsApiSecret;
}


export class GetBarcodeDecodeTypesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetBarcodeDecodeTypesSecurity;
}


export class GetBarcodeDecodeTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
