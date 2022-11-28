import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreprocessingBinarizeRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingBinarizeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingBinarizeRequestBodyImageFile;
}


export class PreprocessingBinarizeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingBinarizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingBinarizeRequestBody;

  @SpeakeasyMetadata()
  security: PreprocessingBinarizeSecurity;
}


export class PreprocessingBinarizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  preprocessingBinarize200ApplicationJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingBinarize200ApplicationXmlByteString?: string;

  @SpeakeasyMetadata()
  preprocessingBinarize200TextJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingBinarize200TextXmlByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
