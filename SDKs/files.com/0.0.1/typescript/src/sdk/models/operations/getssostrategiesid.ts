import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSsoStrategiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetSsoStrategiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSsoStrategiesIdPathParams;
}


export class GetSsoStrategiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ssoStrategyEntity?: shared.SsoStrategyEntity;

  @Metadata()
  statusCode: number;
}
