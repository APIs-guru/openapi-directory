import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseCreateDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseCreateDocumentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=parentDocument" })
  parentDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=parentProperty" })
  parentProperty?: string;

  @SpeakeasyMetadata({ data: "json, name=parentPropertyType" })
  parentPropertyType?: string;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: string[];

  @SpeakeasyMetadata({ data: "json, name=write" })
  write?: string[];
}


export class DatabaseCreateDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseCreateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseCreateDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DatabaseCreateDocumentRequestBody;

  @SpeakeasyMetadata()
  security: DatabaseCreateDocumentSecurity;
}


export class DatabaseCreateDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  document?: Map<string, any>;
}
