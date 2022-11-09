import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestInfrastructurePropertiesInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestInfrastructurePropertiesInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestInfrastructurePropertiesInfoHeaders;
}


export class RequestInfrastructurePropertiesInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  infrastructureProperties?: shared.InfrastructureProperties;

  @Metadata()
  statusCode: number;
}
