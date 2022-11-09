import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MakeTokenGetTokenPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class MakeTokenGetTokenPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MakeTokenGetTokenPostQueryParams;
}


export class MakeTokenGetTokenPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  jsonWebToken?: shared.JsonWebToken;

  @Metadata()
  statusCode: number;
}
