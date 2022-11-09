import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PreprocessingUnrotateRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PreprocessingUnrotateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PreprocessingUnrotateRequestBodyImageFile;
}


export class PreprocessingUnrotateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PreprocessingUnrotateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PreprocessingUnrotateRequestBody;

  @Metadata()
  security: PreprocessingUnrotateSecurity;
}


export class PreprocessingUnrotateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  preprocessingUnrotate200ApplicationJsonByteString?: string;

  @Metadata()
  preprocessingUnrotate200ApplicationXmlByteString?: string;

  @Metadata()
  preprocessingUnrotate200TextJsonByteString?: string;

  @Metadata()
  preprocessingUnrotate200TextXmlByteString?: string;

  @Metadata()
  statusCode: number;
}
