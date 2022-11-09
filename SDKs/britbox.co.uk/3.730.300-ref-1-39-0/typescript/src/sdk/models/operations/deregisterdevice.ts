import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeregisterDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeregisterDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class DeregisterDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class DeregisterDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeregisterDevicePathParams;

  @Metadata()
  queryParams: DeregisterDeviceQueryParams;

  @Metadata()
  security: DeregisterDeviceSecurity;
}


export class DeregisterDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
