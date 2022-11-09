import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DocumentSimilarityRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=copy;" })
  copy?: string;

  @Metadata({ data: "form, name=original;" })
  original?: string;
}


export class DocumentSimilarityRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: DocumentSimilarityRequestBody;
}


export class DocumentSimilarityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
