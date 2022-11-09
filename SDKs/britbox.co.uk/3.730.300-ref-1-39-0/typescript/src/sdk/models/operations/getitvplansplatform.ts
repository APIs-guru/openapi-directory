import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItvPlansPlatformPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetItvPlansPlatformQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItvPlansPlatformSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetItvPlansPlatformRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItvPlansPlatformPathParams;

  @Metadata()
  queryParams: GetItvPlansPlatformQueryParams;

  @Metadata()
  security: GetItvPlansPlatformSecurity;
}


export class GetItvPlansPlatformResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvPlans?: shared.ItvPlans;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
