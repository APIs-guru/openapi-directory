import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" })
  dataRequestId: string;
}


export class GetDataRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetDataRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataRequestPathParams;

  @SpeakeasyMetadata()
  security: GetDataRequestSecurity;
}


export class GetDataRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  submissionDataRequest?: shared.SubmissionDataRequest;
}
