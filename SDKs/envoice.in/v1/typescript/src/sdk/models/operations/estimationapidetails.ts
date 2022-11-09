import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EstimationApiDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class EstimationApiDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EstimationApiDetailsQueryParams;

  @Metadata()
  headers: EstimationApiDetailsHeaders;
}


export class EstimationApiDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimationFullDetailsApiModel?: shared.EstimationFullDetailsApiModel;

  @Metadata()
  statusCode: number;
}
