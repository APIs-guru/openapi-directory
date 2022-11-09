import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreprocessingUnrotateAdvancedRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingUnrotateAdvancedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingUnrotateAdvancedRequestBodyImageFile;
}


export class PreprocessingUnrotateAdvancedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingUnrotateAdvancedRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingUnrotateAdvancedRequestBody;

  @Metadata()
  security: PreprocessingUnrotateAdvancedSecurity;
}


export class PreprocessingUnrotateAdvancedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  preprocessingUnrotateAdvanced200ApplicationJsonByteString?: string;

  @Metadata()
  preprocessingUnrotateAdvanced200ApplicationXmlByteString?: string;

  @Metadata()
  preprocessingUnrotateAdvanced200TextJsonByteString?: string;

  @Metadata()
  preprocessingUnrotateAdvanced200TextXmlByteString?: string;

  @Metadata()
  statusCode: number;
}
