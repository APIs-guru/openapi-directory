import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetModelNamesGetModelsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=brandName" })
  brandName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;
}


export class GetModelNamesGetModelsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModelNamesGetModelsGetQueryParams;
}


export class GetModelNamesGetModelsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  modelResp?: shared.ModelResp;

  @Metadata()
  statusCode: number;
}
