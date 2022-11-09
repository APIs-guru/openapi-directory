import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribePermissionSetProvisioningStatusXAmzTargetEnum {
    SwbExternalServiceDescribePermissionSetProvisioningStatus = "SWBExternalService.DescribePermissionSetProvisioningStatus"
}


export class DescribePermissionSetProvisioningStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribePermissionSetProvisioningStatusXAmzTargetEnum;
}


export class DescribePermissionSetProvisioningStatusRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribePermissionSetProvisioningStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribePermissionSetProvisioningStatusRequest;
}


export class DescribePermissionSetProvisioningStatusResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describePermissionSetProvisioningStatusResponse?: shared.DescribePermissionSetProvisioningStatusResponse;

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
