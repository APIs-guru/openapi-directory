import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreprocessingUnskewRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingUnskewRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingUnskewRequestBodyImageFile;
}


export class PreprocessingUnskewSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingUnskewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingUnskewRequestBody;

  @SpeakeasyMetadata()
  security: PreprocessingUnskewSecurity;
}


export class PreprocessingUnskewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  preprocessingUnskew200ApplicationJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnskew200ApplicationXmlByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnskew200TextJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingUnskew200TextXmlByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
