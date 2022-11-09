import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BatchImportFindingsHeaders extends SpeakeasyBase {
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


export class BatchImportFindingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Findings", elemType: shared.AwsSecurityFinding })
  findings: shared.AwsSecurityFinding[];
}


export class BatchImportFindingsRequest extends SpeakeasyBase {
  @Metadata()
  headers: BatchImportFindingsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: BatchImportFindingsRequestBody;
}


export class BatchImportFindingsResponse extends SpeakeasyBase {
  @Metadata()
  batchImportFindingsResponse?: shared.BatchImportFindingsResponse;

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
