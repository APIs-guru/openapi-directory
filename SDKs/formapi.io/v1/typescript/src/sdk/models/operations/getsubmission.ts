import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission_id" })
  submissionId: string;
}


export class GetSubmissionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_data" })
  includeData?: boolean;
}


export class GetSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GetSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubmissionQueryParams;

  @SpeakeasyMetadata()
  security: GetSubmissionSecurity;
}


export class GetSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  submission?: shared.Submission;
}
