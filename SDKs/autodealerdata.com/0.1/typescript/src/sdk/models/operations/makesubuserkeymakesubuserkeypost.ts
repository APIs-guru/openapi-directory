import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MakeSubUserKeyMakeSubUserKeyPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=siteName" })
  siteName?: string;
}


export class MakeSubUserKeyMakeSubUserKeyPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MakeSubUserKeyMakeSubUserKeyPostQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EndpointList;
}


export class MakeSubUserKeyMakeSubUserKeyPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;

  @Metadata()
  subUserJsonWebToken?: shared.SubUserJsonWebToken;
}
