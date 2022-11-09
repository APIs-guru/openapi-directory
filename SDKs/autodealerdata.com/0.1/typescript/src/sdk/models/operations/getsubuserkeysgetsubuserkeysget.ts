import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSubUserKeysGetSubUserKeysGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;
}


export class GetSubUserKeysGetSubUserKeysGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSubUserKeysGetSubUserKeysGetQueryParams;
}


export class GetSubUserKeysGetSubUserKeysGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: shared.GenericResponse;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
