import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSsoStrategiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSsoStrategiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSsoStrategiesQueryParams;
}


export class GetSsoStrategiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.SsoStrategyEntity })
  ssoStrategyEntities?: shared.SsoStrategyEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
