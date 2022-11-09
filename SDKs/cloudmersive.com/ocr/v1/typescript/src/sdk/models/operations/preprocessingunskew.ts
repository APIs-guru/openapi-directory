import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreprocessingUnskewRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingUnskewRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingUnskewRequestBodyImageFile;
}


export class PreprocessingUnskewSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingUnskewRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingUnskewRequestBody;

  @Metadata()
  security: PreprocessingUnskewSecurity;
}


export class PreprocessingUnskewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  preprocessingUnskew200ApplicationJsonByteString?: string;

  @Metadata()
  preprocessingUnskew200ApplicationXmlByteString?: string;

  @Metadata()
  preprocessingUnskew200TextJsonByteString?: string;

  @Metadata()
  preprocessingUnskew200TextXmlByteString?: string;

  @Metadata()
  statusCode: number;
}
