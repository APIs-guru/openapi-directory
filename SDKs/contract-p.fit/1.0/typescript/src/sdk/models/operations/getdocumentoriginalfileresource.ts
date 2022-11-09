import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDocumentOriginalFileResourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetDocumentOriginalFileResourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDocumentOriginalFileResourcePathParams;
}


export class GetDocumentOriginalFileResourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
