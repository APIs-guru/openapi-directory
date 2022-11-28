import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseDeleteDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=documentId" })
  documentId: string;
}


export class DatabaseDeleteDocumentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseDeleteDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseDeleteDocumentPathParams;

  @SpeakeasyMetadata()
  security: DatabaseDeleteDocumentSecurity;
}


export class DatabaseDeleteDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
