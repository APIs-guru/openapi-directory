import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WkhtmltopdfFromHtmlPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.WkHtmlToPdfHtmlToPdfRequest;
}


export class WkhtmltopdfFromHtmlPostResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @Metadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
