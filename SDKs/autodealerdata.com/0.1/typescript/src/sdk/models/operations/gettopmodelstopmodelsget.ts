import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTopModelsTopModelsGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=jwt" })
  jwt: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=regionName" })
  regionName?: string;
}


export class GetTopModelsTopModelsGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTopModelsTopModelsGetQueryParams;
}


export class GetTopModelsTopModelsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  topModelResp?: shared.TopModelResp;
}
