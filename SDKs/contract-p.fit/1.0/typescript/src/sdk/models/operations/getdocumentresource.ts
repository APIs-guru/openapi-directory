import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDocumentResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetDocumentResourceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Fields" })
  xFields?: string;
}


export class GetDocumentResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentResourcePathParams;

  @SpeakeasyMetadata()
  headers: GetDocumentResourceHeaders;
}


export class GetDocumentResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  documentModelGet?: shared.DocumentModelGet;

  @SpeakeasyMetadata()
  statusCode: number;
}
