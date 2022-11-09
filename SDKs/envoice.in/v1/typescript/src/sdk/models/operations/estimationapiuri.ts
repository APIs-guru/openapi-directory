import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EstimationApiUriQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class EstimationApiUriHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiUriRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EstimationApiUriQueryParams;

  @Metadata()
  headers: EstimationApiUriHeaders;
}


export class EstimationApiUriResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimationUriApiModel?: shared.EstimationUriApiModel;

  @Metadata()
  statusCode: number;
}
