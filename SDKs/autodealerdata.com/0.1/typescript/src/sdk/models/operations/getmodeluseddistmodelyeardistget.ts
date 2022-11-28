import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetModelUsedDistModelYearDistGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modelName" })
  modelName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetModelUsedDistModelYearDistGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelUsedDistModelYearDistGetQueryParams;
}


export class GetModelUsedDistModelYearDistGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  modelYearDistResp?: shared.ModelYearDistResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
