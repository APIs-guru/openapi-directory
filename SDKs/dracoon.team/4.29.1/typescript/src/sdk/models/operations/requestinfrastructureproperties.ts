import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestInfrastructurePropertiesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestInfrastructurePropertiesRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestInfrastructurePropertiesHeaders;
}


export class RequestInfrastructurePropertiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  infrastructureProperties?: shared.InfrastructureProperties;

  @Metadata()
  statusCode: number;
}
