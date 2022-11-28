import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppDIdPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appDId" })
  appDId: string;
}


export class AppDIdPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppDIdPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/zip" })
  request?: Uint8Array;
}


export class AppDIdPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
