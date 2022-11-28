import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetModelNamesGetModelsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetModelNamesGetModelsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelNamesGetModelsGetQueryParams;
}


export class GetModelNamesGetModelsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  modelResp?: shared.ModelResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
