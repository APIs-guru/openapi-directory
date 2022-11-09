import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDataRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" })
  dataRequestId: string;
}


export class GetDataRequestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetDataRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDataRequestPathParams;

  @Metadata()
  security: GetDataRequestSecurity;
}


export class GetDataRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  submissionDataRequest?: shared.SubmissionDataRequest;
}
