import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreprocessingBinarizeAdvancedRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingBinarizeAdvancedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingBinarizeAdvancedRequestBodyImageFile;
}


export class PreprocessingBinarizeAdvancedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingBinarizeAdvancedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingBinarizeAdvancedRequestBody;

  @Metadata()
  security: PreprocessingBinarizeAdvancedSecurity;
}


export class PreprocessingBinarizeAdvancedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  preprocessingBinarizeAdvanced200ApplicationJsonByteString?: string;

  @Metadata()
  preprocessingBinarizeAdvanced200ApplicationXmlByteString?: string;

  @Metadata()
  preprocessingBinarizeAdvanced200TextJsonByteString?: string;

  @Metadata()
  preprocessingBinarizeAdvanced200TextXmlByteString?: string;

  @Metadata()
  statusCode: number;
}
