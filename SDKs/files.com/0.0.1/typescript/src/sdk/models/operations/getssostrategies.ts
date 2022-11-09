import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSsoStrategiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetSsoStrategiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSsoStrategiesQueryParams;
}


export class GetSsoStrategiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.SsoStrategyEntity })
  ssoStrategyEntities?: shared.SsoStrategyEntity[];

  @Metadata()
  statusCode: number;
}
