import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseUpdateDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}


export class DatabaseUpdateDocumentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: string[];

  @SpeakeasyMetadata({ data: "json, name=write" })
  write?: string[];
}


export class DatabaseUpdateDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseUpdateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseUpdateDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DatabaseUpdateDocumentRequestBody;

  @SpeakeasyMetadata()
  security: DatabaseUpdateDocumentSecurity;
}


export class DatabaseUpdateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  document?: Map<string, any>;
}
