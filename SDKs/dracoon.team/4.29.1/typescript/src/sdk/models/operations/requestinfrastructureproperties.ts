import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestInfrastructurePropertiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestInfrastructurePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestInfrastructurePropertiesHeaders;
}


export class RequestInfrastructurePropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  infrastructureProperties?: shared.InfrastructureProperties;

  @SpeakeasyMetadata()
  statusCode: number;
}
