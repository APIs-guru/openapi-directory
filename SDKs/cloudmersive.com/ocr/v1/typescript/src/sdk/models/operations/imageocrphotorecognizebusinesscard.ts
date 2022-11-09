import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoRecognizeBusinessCardRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile;
}


export class ImageOcrPhotoRecognizeBusinessCardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoRecognizeBusinessCardRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoRecognizeBusinessCardRequestBody;

  @Metadata()
  security: ImageOcrPhotoRecognizeBusinessCardSecurity;
}


export class ImageOcrPhotoRecognizeBusinessCardResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  businessCardRecognitionResult?: shared.BusinessCardRecognitionResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
