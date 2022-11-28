import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ExpireSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission_id" })
  submissionId: string;
}


export class ExpireSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class ExpireSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ExpireSubmissionPathParams;

  @SpeakeasyMetadata()
  security: ExpireSubmissionSecurity;
}


export class ExpireSubmissionResponse extends SpeakeasyBase {
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
