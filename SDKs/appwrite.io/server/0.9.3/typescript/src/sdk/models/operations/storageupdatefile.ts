import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageUpdateFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class StorageUpdateFileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=read" })
  read: string[];

  @Metadata({ data: "json, name=write" })
  write: string[];
}


export class StorageUpdateFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageUpdateFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageUpdateFilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: StorageUpdateFileRequestBody;

  @Metadata()
  security: StorageUpdateFileSecurity;
}


export class StorageUpdateFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  file?: shared.File;
}
