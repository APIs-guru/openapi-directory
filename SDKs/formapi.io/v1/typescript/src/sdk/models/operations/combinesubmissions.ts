import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CombineSubmissionsCombinedSubmissionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=submission_ids" })
  submissionIds: string[];

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;
}


export class CombineSubmissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum {
    Submission = "submission",
    CombinedSubmission = "combined_submission",
    Template = "template",
    CustomFile = "custom_file"
}


export class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs1TypeEnum;
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum {
    Url = "url"
}


export class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionSourcePdfs2TypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum {
    Pending = "pending",
    Processed = "processed",
    Error = "error"
}


export class CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actions", elemType: shared.CombinedSubmissionAction })
  actions?: shared.CombinedSubmissionAction[];

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=expired" })
  expired: boolean;

  @SpeakeasyMetadata({ data: "json, name=expires_at" })
  expiresAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=pdf_hash" })
  pdfHash?: string;

  @SpeakeasyMetadata({ data: "json, name=source_pdfs" })
  sourcePdfs: any[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmissionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=submission_ids" })
  submissionIds: string[];
}

export enum CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class CombineSubmissionsCreateCombinedSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=combined_submission" })
  combinedSubmission: CombineSubmissionsCreateCombinedSubmissionResponseCombinedSubmission;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CombineSubmissionsCreateCombinedSubmissionResponseStatusEnum;
}


export class CombineSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CombineSubmissionsCombinedSubmissionData;

  @SpeakeasyMetadata()
  security: CombineSubmissionsSecurity;
}


export class CombineSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  createCombinedSubmissionResponse?: CombineSubmissionsCreateCombinedSubmissionResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  invalidRequest?: shared.InvalidRequest;
}
