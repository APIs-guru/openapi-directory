import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MergePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.MergeRequest;
}


export class MergePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
