import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreprocessingUnrotateAdvancedRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingUnrotateAdvancedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingUnrotateAdvancedRequestBodyImageFile;
}


export class PreprocessingUnrotateAdvancedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingUnrotateAdvancedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingUnrotateAdvancedRequestBody;

  @SpeakeasyMetadata()
  security: PreprocessingUnrotateAdvancedSecurity;
}


export class PreprocessingUnrotateAdvancedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  preprocessingUnrotateAdvanced200ApplicationJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnrotateAdvanced200ApplicationXmlByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnrotateAdvanced200TextJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnrotateAdvanced200TextXmlByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
