import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageCreateFileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=file" })
  file: string;

  @Metadata({ data: "multipart_form, name=read" })
  read?: string[];

  @Metadata({ data: "multipart_form, name=write" })
  write?: string[];
}


export class StorageCreateFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageCreateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: StorageCreateFileRequestBody;

  @Metadata()
  security: StorageCreateFileSecurity;
}


export class StorageCreateFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  file?: shared.File;
}
