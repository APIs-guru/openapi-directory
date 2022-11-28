import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSystemRescueKeyPairQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class RequestSystemRescueKeyPairHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestSystemRescueKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestSystemRescueKeyPairQueryParams;

  @SpeakeasyMetadata()
  headers: RequestSystemRescueKeyPairHeaders;
}


export class RequestSystemRescueKeyPairResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userKeyPairContainer?: shared.UserKeyPairContainerOutput;
}
