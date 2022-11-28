import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAllSystemRescueKeyPairsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestAllSystemRescueKeyPairsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestAllSystemRescueKeyPairsHeaders;
}


export class RequestAllSystemRescueKeyPairsResponseOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserKeyPairContainerOutput })
  userKeyPairContainers?: shared.UserKeyPairContainerOutput[];
}
