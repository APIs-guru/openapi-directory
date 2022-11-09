import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDeviceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDevicePathParams;

  @Metadata()
  queryParams: GetDeviceQueryParams;

  @Metadata()
  security: GetDeviceSecurity;
}


export class GetDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  device?: shared.Device;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
