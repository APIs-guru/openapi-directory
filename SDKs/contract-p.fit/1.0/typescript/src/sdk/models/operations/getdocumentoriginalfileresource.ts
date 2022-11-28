import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDocumentOriginalFileResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=document_id" })
  documentId: string;
}


export class GetDocumentOriginalFileResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDocumentOriginalFileResourcePathParams;
}


export class GetDocumentOriginalFileResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
