import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppDIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appDId" })
  appDId: string;
}


export class AppDIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppDIdGetPathParams;
}


export class AppDIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
