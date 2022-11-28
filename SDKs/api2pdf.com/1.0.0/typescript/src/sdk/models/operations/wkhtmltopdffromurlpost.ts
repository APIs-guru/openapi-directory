import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WkhtmltopdfFromUrlPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.WkHtmlToPdfUrlToPdfRequest;
}


export class WkhtmltopdfFromUrlPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
