import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WorkTypeApiDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=workTypeId" })
  workTypeId: number;
}


export class WorkTypeApiDetailsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: WorkTypeApiDetailsQueryParams;

  @SpeakeasyMetadata()
  headers: WorkTypeApiDetailsHeaders;
}


export class WorkTypeApiDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  workTypeDetailsApiModel?: shared.WorkTypeDetailsApiModel;
}
