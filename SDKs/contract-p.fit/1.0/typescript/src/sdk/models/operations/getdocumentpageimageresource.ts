import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDocumentPageImageResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page_range" })
  pageRange: string;
}


export class GetDocumentPageImageResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentPageImageResourcePathParams;
}


export class GetDocumentPageImageResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
