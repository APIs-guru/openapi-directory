import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseGetDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}


export class DatabaseGetDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseGetDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseGetDocumentPathParams;

  @SpeakeasyMetadata()
  security: DatabaseGetDocumentSecurity;
}


export class DatabaseGetDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  document?: Map<string, any>;
}
