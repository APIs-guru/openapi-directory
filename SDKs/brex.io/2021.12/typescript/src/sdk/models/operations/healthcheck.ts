import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HealthCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  userKey: shared.SchemeUserKey;
}


export class HealthCheckRequest extends SpeakeasyBase {
  @Metadata()
  security: HealthCheckSecurity;
}


export class HealthCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  healthCheck200ApplicationJsonAnies?: any[];

  @Metadata()
  healthCheckDefaultApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
