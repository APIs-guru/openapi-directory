import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDocumentTextResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetDocumentTextResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentTextResourcePathParams;
}


export class GetDocumentTextResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
