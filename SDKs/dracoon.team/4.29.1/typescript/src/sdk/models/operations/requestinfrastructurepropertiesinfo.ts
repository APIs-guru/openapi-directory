import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestInfrastructurePropertiesInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestInfrastructurePropertiesInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestInfrastructurePropertiesInfoHeaders;
}


export class RequestInfrastructurePropertiesInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  infrastructureProperties?: shared.InfrastructureProperties;

  @SpeakeasyMetadata()
  statusCode: number;
}
