import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDocumentPageImageResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page_range" })
  pageRange: string;
}


export class GetDocumentPageImageResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentPageImageResourcePathParams;
}


export class GetDocumentPageImageResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
