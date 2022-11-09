import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPermissionSetProvisioningStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListPermissionSetProvisioningStatusXAmzTargetEnum {
    SwbExternalServiceListPermissionSetProvisioningStatus = "SWBExternalService.ListPermissionSetProvisioningStatus"
}


export class ListPermissionSetProvisioningStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPermissionSetProvisioningStatusXAmzTargetEnum;
}


export class ListPermissionSetProvisioningStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPermissionSetProvisioningStatusQueryParams;

  @Metadata()
  headers: ListPermissionSetProvisioningStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPermissionSetProvisioningStatusRequest;
}


export class ListPermissionSetProvisioningStatusResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listPermissionSetProvisioningStatusResponse?: shared.ListPermissionSetProvisioningStatusResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
