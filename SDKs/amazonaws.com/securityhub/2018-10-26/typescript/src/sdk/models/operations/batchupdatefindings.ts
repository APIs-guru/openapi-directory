import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BatchUpdateFindingsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// BatchUpdateFindingsRequestBodyNote
/** 
 * The updated note.
**/
export class BatchUpdateFindingsRequestBodyNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedBy" })
  updatedBy?: string;
}


// BatchUpdateFindingsRequestBodySeverity
/** 
 * Updates to the severity information for a finding.
**/
export class BatchUpdateFindingsRequestBodySeverity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Label" })
  label?: shared.SeverityLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=Normalized" })
  normalized?: number;

  @SpeakeasyMetadata({ data: "json, name=Product" })
  product?: number;
}

export enum BatchUpdateFindingsRequestBodyVerificationStateEnum {
    Unknown = "UNKNOWN",
    TruePositive = "TRUE_POSITIVE",
    FalsePositive = "FALSE_POSITIVE",
    BenignPositive = "BENIGN_POSITIVE"
}


// BatchUpdateFindingsRequestBodyWorkflow
/** 
 * Used to update information about the investigation into the finding.
**/
export class BatchUpdateFindingsRequestBodyWorkflow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: shared.WorkflowStatusEnum;
}


export class BatchUpdateFindingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=Criticality" })
  criticality?: number;

  @SpeakeasyMetadata({ data: "json, name=FindingIdentifiers", elemType: shared.AwsSecurityFindingIdentifier })
  findingIdentifiers: shared.AwsSecurityFindingIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=Note" })
  note?: BatchUpdateFindingsRequestBodyNote;

  @SpeakeasyMetadata({ data: "json, name=RelatedFindings", elemType: shared.RelatedFinding })
  relatedFindings?: shared.RelatedFinding[];

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity?: BatchUpdateFindingsRequestBodySeverity;

  @SpeakeasyMetadata({ data: "json, name=Types" })
  types?: string[];

  @SpeakeasyMetadata({ data: "json, name=UserDefinedFields" })
  userDefinedFields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=VerificationState" })
  verificationState?: BatchUpdateFindingsRequestBodyVerificationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Workflow" })
  workflow?: BatchUpdateFindingsRequestBodyWorkflow;
}


export class BatchUpdateFindingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: BatchUpdateFindingsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: BatchUpdateFindingsRequestBody;
}


export class BatchUpdateFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchUpdateFindingsResponse?: shared.BatchUpdateFindingsResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
