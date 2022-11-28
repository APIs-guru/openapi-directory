import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageCreateFileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=read" })
  read?: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=write" })
  write?: string[];
}


export class StorageCreateFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageCreateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: StorageCreateFileRequestBody;

  @SpeakeasyMetadata()
  security: StorageCreateFileSecurity;
}


export class StorageCreateFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  file?: shared.File;
}
