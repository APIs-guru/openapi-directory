import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateDataRequestTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" })
  dataRequestId: string;
}


export class CreateDataRequestTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_request_url" })
  dataRequestUrl: string;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret: string;
}


export class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken;
}


export class CreateDataRequestTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDataRequestTokenPathParams;

  @SpeakeasyMetadata()
  security: CreateDataRequestTokenSecurity;
}


export class CreateDataRequestTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  createSubmissionDataRequestTokenResponse?: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse;
}
