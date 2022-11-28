import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PreprocessingGetPageAngleRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingGetPageAngleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingGetPageAngleRequestBodyImageFile;
}


export class PreprocessingGetPageAngleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingGetPageAngleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingGetPageAngleRequestBody;

  @SpeakeasyMetadata()
  security: PreprocessingGetPageAngleSecurity;
}


export class PreprocessingGetPageAngleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPageAngleResult?: shared.GetPageAngleResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
