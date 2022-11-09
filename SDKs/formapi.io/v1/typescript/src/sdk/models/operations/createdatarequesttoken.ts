import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateDataRequestTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" })
  dataRequestId: string;
}


export class CreateDataRequestTokenSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class CreateDataRequestTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDataRequestTokenPathParams;

  @Metadata()
  security: CreateDataRequestTokenSecurity;
}

export enum CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_request_url" })
  dataRequestUrl: string;

  @Metadata({ data: "json, name=expires_at" })
  expiresAt: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=secret" })
  secret: string;
}


export class CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum;

  @Metadata({ data: "json, name=token" })
  token: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken;
}


export class CreateDataRequestTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  createSubmissionDataRequestTokenResponse?: CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse;
}
