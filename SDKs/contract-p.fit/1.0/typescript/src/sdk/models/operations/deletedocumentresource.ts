import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDocumentResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class DeleteDocumentResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDocumentResourcePathParams;
}


export class DeleteDocumentResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
