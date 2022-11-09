import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EstimationApiStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class EstimationApiStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class EstimationApiStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EstimationApiStatusQueryParams;

  @Metadata()
  headers: EstimationApiStatusHeaders;
}

export enum EstimationApiStatus200ApplicationJsonEnum {
    Draft = "Draft"
,    Accepted = "Accepted"
,    Rejected = "Rejected"
}

export enum EstimationApiStatus200TextJsonEnum {
    Draft = "Draft"
,    Accepted = "Accepted"
,    Rejected = "Rejected"
}


export class EstimationApiStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  estimationApiStatus200ApplicationJsonStringEnum?: EstimationApiStatus200ApplicationJsonEnum;

  @Metadata()
  estimationApiStatus200TextJsonStringEnum?: EstimationApiStatus200TextJsonEnum;

  @Metadata()
  statusCode: number;
}
