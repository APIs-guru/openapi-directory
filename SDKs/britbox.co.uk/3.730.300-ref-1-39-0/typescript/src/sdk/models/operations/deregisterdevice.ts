import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeregisterDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeregisterDeviceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class DeregisterDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class DeregisterDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeregisterDevicePathParams;

  @SpeakeasyMetadata()
  queryParams: DeregisterDeviceQueryParams;

  @SpeakeasyMetadata()
  security: DeregisterDeviceSecurity;
}


export class DeregisterDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
