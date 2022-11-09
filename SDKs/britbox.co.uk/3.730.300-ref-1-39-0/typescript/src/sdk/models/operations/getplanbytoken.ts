import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlanByTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetPlanByTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPlanByTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlanByTokenPathParams;

  @Metadata()
  queryParams: GetPlanByTokenQueryParams;
}


export class GetPlanByTokenResponse extends SpeakeasyBase {
  @Metadata()
  btPlanListItem?: shared.BtPlanListItem;

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
