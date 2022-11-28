import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItvPlansPlatformPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetItvPlansPlatformQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItvPlansPlatformSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetItvPlansPlatformRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItvPlansPlatformPathParams;

  @SpeakeasyMetadata()
  queryParams: GetItvPlansPlatformQueryParams;

  @SpeakeasyMetadata()
  security: GetItvPlansPlatformSecurity;
}


export class GetItvPlansPlatformResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvPlans?: shared.ItvPlans;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
