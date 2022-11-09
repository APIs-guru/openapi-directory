import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAccountAssignmentCreationStatusXAmzTargetEnum {
    SwbExternalServiceDescribeAccountAssignmentCreationStatus = "SWBExternalService.DescribeAccountAssignmentCreationStatus"
}


export class DescribeAccountAssignmentCreationStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAccountAssignmentCreationStatusXAmzTargetEnum;
}


export class DescribeAccountAssignmentCreationStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAccountAssignmentCreationStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAccountAssignmentCreationStatusRequest;
}


export class DescribeAccountAssignmentCreationStatusResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeAccountAssignmentCreationStatusResponse?: shared.DescribeAccountAssignmentCreationStatusResponse;

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
