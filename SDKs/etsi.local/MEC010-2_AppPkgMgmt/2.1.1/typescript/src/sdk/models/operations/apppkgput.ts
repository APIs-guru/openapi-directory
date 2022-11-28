import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPkgPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPkgPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppPkgPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/zip" })
  request?: Uint8Array;
}


export class AppPkgPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
