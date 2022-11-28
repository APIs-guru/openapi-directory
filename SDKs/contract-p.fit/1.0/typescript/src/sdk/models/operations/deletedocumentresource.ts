import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDocumentResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class DeleteDocumentResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDocumentResourcePathParams;
}


export class DeleteDocumentResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
