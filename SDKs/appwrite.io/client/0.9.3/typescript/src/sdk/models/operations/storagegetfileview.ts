import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StorageGetFileViewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class StorageGetFileViewSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class StorageGetFileViewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StorageGetFileViewPathParams;

  @SpeakeasyMetadata()
  security: StorageGetFileViewSecurity;
}


export class StorageGetFileViewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
