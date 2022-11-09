import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPlanQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPlanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPlanPathParams;

  @Metadata()
  queryParams: GetPlanQueryParams;
}


export class GetPlanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eePlanListItem?: shared.EePlanListItem;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
