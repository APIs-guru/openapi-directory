import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatabaseCreateDocumentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseCreateDocumentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=parentDocument" })
  parentDocument?: string;

  @Metadata({ data: "json, name=parentProperty" })
  parentProperty?: string;

  @Metadata({ data: "json, name=parentPropertyType" })
  parentPropertyType?: string;

  @Metadata({ data: "json, name=read" })
  read?: string[];

  @Metadata({ data: "json, name=write" })
  write?: string[];
}


export class DatabaseCreateDocumentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseCreateDocumentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DatabaseCreateDocumentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: DatabaseCreateDocumentRequestBody;

  @Metadata()
  security: DatabaseCreateDocumentSecurity;
}


export class DatabaseCreateDocumentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  document?: Map<string, any>;
}
