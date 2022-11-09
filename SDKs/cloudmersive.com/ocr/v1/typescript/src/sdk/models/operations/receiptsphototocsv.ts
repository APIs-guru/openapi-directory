import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReceiptsPhotoToCsvRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ReceiptsPhotoToCsvRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ReceiptsPhotoToCsvRequestBodyImageFile;
}


export class ReceiptsPhotoToCsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ReceiptsPhotoToCsvRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ReceiptsPhotoToCsvRequestBody;

  @Metadata()
  security: ReceiptsPhotoToCsvSecurity;
}


export class ReceiptsPhotoToCsvResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  receiptsPhotoToCsv200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  receiptsPhotoToCsv200TextJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
