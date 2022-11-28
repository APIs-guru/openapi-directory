import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetModelNamesAllGetInactiveModelsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetModelNamesAllGetInactiveModelsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelNamesAllGetInactiveModelsGetQueryParams;
}


export class GetModelNamesAllGetInactiveModelsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  modelResp?: shared.ModelResp;

  @SpeakeasyMetadata()
  statusCode: number;
}
