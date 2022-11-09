import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppPkgPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPkgPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppPkgPutPathParams;

  @Metadata({ data: "request, media_type=application/zip" })
  request?: Uint8Array;
}


export class AppPkgPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
