import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppDIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appDId" })
  appDId: string;
}


export class AppDIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppDIdGetPathParams;
}


export class AppDIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
