import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreprocessingBinarizeRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingBinarizeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingBinarizeRequestBodyImageFile;
}


export class PreprocessingBinarizeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingBinarizeRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingBinarizeRequestBody;

  @Metadata()
  security: PreprocessingBinarizeSecurity;
}


export class PreprocessingBinarizeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  preprocessingBinarize200ApplicationJsonByteString?: string;

  @Metadata()
  preprocessingBinarize200ApplicationXmlByteString?: string;

  @Metadata()
  preprocessingBinarize200TextJsonByteString?: string;

  @Metadata()
  preprocessingBinarize200TextXmlByteString?: string;

  @Metadata()
  statusCode: number;
}
