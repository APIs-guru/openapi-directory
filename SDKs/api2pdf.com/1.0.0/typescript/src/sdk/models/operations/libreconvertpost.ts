import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LibreConvertPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.LibreOfficeConvertRequest;
}


export class LibreConvertPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
