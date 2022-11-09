import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatabaseGetDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}


export class DatabaseGetDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseGetDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DatabaseGetDocumentPathParams;

  @Metadata()
  security: DatabaseGetDocumentSecurity;
}


export class DatabaseGetDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  document?: Map<string, any>;
}
