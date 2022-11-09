import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EstimationApiAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.page" })
  queryOptionsPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=queryOptions.pageSize" })
  queryOptionsPageSize?: number;
}


export class EstimationApiAllHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiAllRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EstimationApiAllQueryParams;

  @Metadata()
  headers: EstimationApiAllHeaders;
}


export class EstimationApiAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  listResultEstimationDetailsApiModel?: shared.ListResultEstimationDetailsApiModel;

  @Metadata()
  statusCode: number;
}
