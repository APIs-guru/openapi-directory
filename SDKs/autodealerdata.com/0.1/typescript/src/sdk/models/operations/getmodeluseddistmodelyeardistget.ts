import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetModelUsedDistModelYearDistGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetModelUsedDistModelYearDistGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModelUsedDistModelYearDistGetQueryParams;
}


export class GetModelUsedDistModelYearDistGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  modelYearDistResp?: shared.ModelYearDistResp;

  @Metadata()
  statusCode: number;
}
