import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlanByTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetPlanByTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPlanByTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlanByTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlanByTokenQueryParams;
}


export class GetPlanByTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  btPlanListItem?: shared.BtPlanListItem;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
