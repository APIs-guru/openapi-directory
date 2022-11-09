import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppDIdPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appDId" })
  appDId: string;
}


export class AppDIdPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppDIdPutPathParams;

  @Metadata({ data: "request, media_type=application/zip" })
  request?: Uint8Array;
}


export class AppDIdPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
