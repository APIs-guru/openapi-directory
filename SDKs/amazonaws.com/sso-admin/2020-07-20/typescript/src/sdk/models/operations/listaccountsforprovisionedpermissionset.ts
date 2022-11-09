import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAccountsForProvisionedPermissionSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAccountsForProvisionedPermissionSetXAmzTargetEnum {
    SwbExternalServiceListAccountsForProvisionedPermissionSet = "SWBExternalService.ListAccountsForProvisionedPermissionSet"
}


export class ListAccountsForProvisionedPermissionSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAccountsForProvisionedPermissionSetXAmzTargetEnum;
}


export class ListAccountsForProvisionedPermissionSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAccountsForProvisionedPermissionSetQueryParams;

  @Metadata()
  headers: ListAccountsForProvisionedPermissionSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAccountsForProvisionedPermissionSetRequest;
}


export class ListAccountsForProvisionedPermissionSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listAccountsForProvisionedPermissionSetResponse?: shared.ListAccountsForProvisionedPermissionSetResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
