import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatabaseUpdateDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}


export class DatabaseUpdateDocumentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=read" })
  read?: string[];

  @Metadata({ data: "json, name=write" })
  write?: string[];
}


export class DatabaseUpdateDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseUpdateDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DatabaseUpdateDocumentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: DatabaseUpdateDocumentRequestBody;

  @Metadata()
  security: DatabaseUpdateDocumentSecurity;
}


export class DatabaseUpdateDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  document?: Map<string, any>;
}
