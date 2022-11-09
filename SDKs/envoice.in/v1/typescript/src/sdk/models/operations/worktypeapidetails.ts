import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WorkTypeApiDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=workTypeId" })
  workTypeId: number;
}


export class WorkTypeApiDetailsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class WorkTypeApiDetailsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WorkTypeApiDetailsQueryParams;

  @Metadata()
  headers: WorkTypeApiDetailsHeaders;
}


export class WorkTypeApiDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  workTypeDetailsApiModel?: shared.WorkTypeDetailsApiModel;
}
