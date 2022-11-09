import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeSubUserKeyRevokeSubUserKeyPutQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=subUserKeyUUID" })
  subUserKeyUuid: string;
}


export class RevokeSubUserKeyRevokeSubUserKeyPutRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RevokeSubUserKeyRevokeSubUserKeyPutQueryParams;
}


export class RevokeSubUserKeyRevokeSubUserKeyPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  genericResponse?: shared.GenericResponse;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
