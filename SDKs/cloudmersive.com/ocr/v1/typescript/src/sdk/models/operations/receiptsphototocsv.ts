import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReceiptsPhotoToCsvRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ReceiptsPhotoToCsvRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ReceiptsPhotoToCsvRequestBodyImageFile;
}


export class ReceiptsPhotoToCsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ReceiptsPhotoToCsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ReceiptsPhotoToCsvRequestBody;

  @SpeakeasyMetadata()
  security: ReceiptsPhotoToCsvSecurity;
}


export class ReceiptsPhotoToCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  receiptsPhotoToCsv200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  receiptsPhotoToCsv200TextJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
