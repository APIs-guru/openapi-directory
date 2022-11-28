import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeSubUserKeyRevokeSubUserKeyPutQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiID" })
  apiId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiKey" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subUserKeyUUID" })
  subUserKeyUuid: string;
}


export class RevokeSubUserKeyRevokeSubUserKeyPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RevokeSubUserKeyRevokeSubUserKeyPutQueryParams;
}


export class RevokeSubUserKeyRevokeSubUserKeyPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  genericResponse?: shared.GenericResponse;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
