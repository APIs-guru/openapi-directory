import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreprocessingGetPageAngleRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingGetPageAngleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingGetPageAngleRequestBodyImageFile;
}


export class PreprocessingGetPageAngleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingGetPageAngleRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingGetPageAngleRequestBody;

  @Metadata()
  security: PreprocessingGetPageAngleSecurity;
}


export class PreprocessingGetPageAngleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getPageAngleResult?: shared.GetPageAngleResult;

  @Metadata()
  statusCode: number;
}
