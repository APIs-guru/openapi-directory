import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListManagedPoliciesInPermissionSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListManagedPoliciesInPermissionSetXAmzTargetEnum {
    SwbExternalServiceListManagedPoliciesInPermissionSet = "SWBExternalService.ListManagedPoliciesInPermissionSet"
}


export class ListManagedPoliciesInPermissionSetHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListManagedPoliciesInPermissionSetXAmzTargetEnum;
}


export class ListManagedPoliciesInPermissionSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListManagedPoliciesInPermissionSetQueryParams;

  @Metadata()
  headers: ListManagedPoliciesInPermissionSetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListManagedPoliciesInPermissionSetRequest;
}


export class ListManagedPoliciesInPermissionSetResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listManagedPoliciesInPermissionSetResponse?: shared.ListManagedPoliciesInPermissionSetResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
