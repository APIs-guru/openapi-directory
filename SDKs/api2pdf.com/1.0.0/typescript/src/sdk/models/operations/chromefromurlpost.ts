import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChromeFromUrlPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ChromeUrlToPdfRequest;
}


export class ChromeFromUrlPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
