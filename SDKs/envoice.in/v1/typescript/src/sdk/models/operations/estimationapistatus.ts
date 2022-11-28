import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EstimationApiStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;
}


export class EstimationApiStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}

export enum EstimationApiStatus200ApplicationJsonEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}

export enum EstimationApiStatus200TextJsonEnum {
    Draft = "Draft",
    Accepted = "Accepted",
    Rejected = "Rejected"
}


export class EstimationApiStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EstimationApiStatusQueryParams;

  @SpeakeasyMetadata()
  headers: EstimationApiStatusHeaders;
}


export class EstimationApiStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  estimationApiStatus200ApplicationJsonStringEnum?: EstimationApiStatus200ApplicationJsonEnum;

  @SpeakeasyMetadata()
  estimationApiStatus200TextJsonStringEnum?: EstimationApiStatus200TextJsonEnum;

  @SpeakeasyMetadata()
  statusCode: number;
}
