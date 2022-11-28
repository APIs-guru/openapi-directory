import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MakeTokenGetTokenPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class MakeTokenGetTokenPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MakeTokenGetTokenPostQueryParams;
}


export class MakeTokenGetTokenPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  jsonWebToken?: shared.JsonWebToken;

  @SpeakeasyMetadata()
  statusCode: number;
}
