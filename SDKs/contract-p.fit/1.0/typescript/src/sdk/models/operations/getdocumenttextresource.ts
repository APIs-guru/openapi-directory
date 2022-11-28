import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDocumentTextResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetDocumentTextResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentTextResourcePathParams;
}


export class GetDocumentTextResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
