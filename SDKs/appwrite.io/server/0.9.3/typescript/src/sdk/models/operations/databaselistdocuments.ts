import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatabaseListDocumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class DatabaseListDocumentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderCast" })
  orderCast?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderField" })
  orderField?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderType" })
  orderType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class DatabaseListDocumentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: shared.SchemeJwt;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key: shared.SchemeKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  project: shared.SchemeProject;
}


export class DatabaseListDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatabaseListDocumentsPathParams;

  @SpeakeasyMetadata()
  queryParams: DatabaseListDocumentsQueryParams;

  @SpeakeasyMetadata()
  security: DatabaseListDocumentsSecurity;
}


export class DatabaseListDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  documentList?: shared.DocumentList;
}
