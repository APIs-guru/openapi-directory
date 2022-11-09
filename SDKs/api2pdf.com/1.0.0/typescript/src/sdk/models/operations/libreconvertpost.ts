import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LibreConvertPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.LibreOfficeConvertRequest;
}


export class LibreConvertPostResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @Metadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
