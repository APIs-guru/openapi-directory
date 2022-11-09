import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDocumentResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetDocumentResourceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Fields" })
  xFields?: string;
}


export class GetDocumentResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentResourcePathParams;

  @Metadata()
  headers: GetDocumentResourceHeaders;
}


export class GetDocumentResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  documentModelGet?: shared.DocumentModelGet;

  @Metadata()
  statusCode: number;
}
