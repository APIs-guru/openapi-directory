import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocumentSimilarityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=api_key;" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "form, name=copy;" })
  copy?: string;

  @SpeakeasyMetadata({ data: "form, name=original;" })
  original?: string;
}


export class DocumentSimilarityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: DocumentSimilarityRequestBody;
}


export class DocumentSimilarityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
