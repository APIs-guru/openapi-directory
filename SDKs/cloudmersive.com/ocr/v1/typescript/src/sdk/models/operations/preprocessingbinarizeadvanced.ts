import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreprocessingBinarizeAdvancedRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingBinarizeAdvancedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingBinarizeAdvancedRequestBodyImageFile;
}


export class PreprocessingBinarizeAdvancedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingBinarizeAdvancedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingBinarizeAdvancedRequestBody;

  @SpeakeasyMetadata()
  security: PreprocessingBinarizeAdvancedSecurity;
}


export class PreprocessingBinarizeAdvancedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  preprocessingBinarizeAdvanced200ApplicationJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingBinarizeAdvanced200ApplicationXmlByteString?: string;

  @SpeakeasyMetadata()
  preprocessingBinarizeAdvanced200TextJsonByteString?: string;

  @SpeakeasyMetadata()
  preprocessingBinarizeAdvanced200TextXmlByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
