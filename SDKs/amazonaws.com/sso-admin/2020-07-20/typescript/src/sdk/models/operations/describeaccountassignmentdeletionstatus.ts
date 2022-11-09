import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAccountAssignmentDeletionStatusXAmzTargetEnum {
    SwbExternalServiceDescribeAccountAssignmentDeletionStatus = "SWBExternalService.DescribeAccountAssignmentDeletionStatus"
}


export class DescribeAccountAssignmentDeletionStatusHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DescribeAccountAssignmentDeletionStatusXAmzTargetEnum;
}


export class DescribeAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAccountAssignmentDeletionStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAccountAssignmentDeletionStatusRequest;
}


export class DescribeAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAccountAssignmentDeletionStatusResponse?: shared.DescribeAccountAssignmentDeletionStatusResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
