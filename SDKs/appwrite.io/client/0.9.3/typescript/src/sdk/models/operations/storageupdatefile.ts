import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageUpdateFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class StorageUpdateFileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=read" })
  read: string[];

  @SpeakeasyMetadata({ data: "json, name=write" })
  write: string[];
}


export class StorageUpdateFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageUpdateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageUpdateFilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: StorageUpdateFileRequestBody;

  @SpeakeasyMetadata()
  security: StorageUpdateFileSecurity;
}


export class StorageUpdateFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  file?: shared.File;
}
