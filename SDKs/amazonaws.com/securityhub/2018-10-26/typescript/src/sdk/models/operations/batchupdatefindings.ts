import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchUpdateFindingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// BatchUpdateFindingsRequestBodyNote
/** 
 * The updated note.
**/
export class BatchUpdateFindingsRequestBodyNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=UpdatedBy" })
  updatedBy?: string;
}


// BatchUpdateFindingsRequestBodySeverity
/** 
 * Updates to the severity information for a finding.
**/
export class BatchUpdateFindingsRequestBodySeverity extends SpeakeasyBase {
  @Metadata({ data: "json, name=Label" })
  label?: shared.SeverityLabelEnum;

  @Metadata({ data: "json, name=Normalized" })
  normalized?: number;

  @Metadata({ data: "json, name=Product" })
  product?: number;
}

export enum BatchUpdateFindingsRequestBodyVerificationStateEnum {
    Unknown = "UNKNOWN"
,    TruePositive = "TRUE_POSITIVE"
,    FalsePositive = "FALSE_POSITIVE"
,    BenignPositive = "BENIGN_POSITIVE"
}


// BatchUpdateFindingsRequestBodyWorkflow
/** 
 * Used to update information about the investigation into the finding.
**/
export class BatchUpdateFindingsRequestBodyWorkflow extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: shared.WorkflowStatusEnum;
}


export class BatchUpdateFindingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=Criticality" })
  criticality?: number;

  @Metadata({ data: "json, name=FindingIdentifiers", elemType: shared.AwsSecurityFindingIdentifier })
  findingIdentifiers: shared.AwsSecurityFindingIdentifier[];

  @Metadata({ data: "json, name=Note" })
  note?: BatchUpdateFindingsRequestBodyNote;

  @Metadata({ data: "json, name=RelatedFindings", elemType: shared.RelatedFinding })
  relatedFindings?: shared.RelatedFinding[];

  @Metadata({ data: "json, name=Severity" })
  severity?: BatchUpdateFindingsRequestBodySeverity;

  @Metadata({ data: "json, name=Types" })
  types?: string[];

  @Metadata({ data: "json, name=UserDefinedFields" })
  userDefinedFields?: Map<string, string>;

  @Metadata({ data: "json, name=VerificationState" })
  verificationState?: BatchUpdateFindingsRequestBodyVerificationStateEnum;

  @Metadata({ data: "json, name=Workflow" })
  workflow?: BatchUpdateFindingsRequestBodyWorkflow;
}


export class BatchUpdateFindingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchUpdateFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchUpdateFindingsRequestBody;
}


export class BatchUpdateFindingsResponse extends SpeakeasyBase {
  @Metadata()
  batchUpdateFindingsResponse?: shared.BatchUpdateFindingsResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
