import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoRecognizeBusinessCardRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile;
}


export class ImageOcrPhotoRecognizeBusinessCardSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoRecognizeBusinessCardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoRecognizeBusinessCardRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrPhotoRecognizeBusinessCardSecurity;
}


export class ImageOcrPhotoRecognizeBusinessCardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  businessCardRecognitionResult?: shared.BusinessCardRecognitionResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
