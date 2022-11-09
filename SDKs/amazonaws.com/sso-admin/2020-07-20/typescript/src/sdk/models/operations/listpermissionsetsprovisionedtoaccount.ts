import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListPermissionSetsProvisionedToAccountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListPermissionSetsProvisionedToAccountXAmzTargetEnum {
    SwbExternalServiceListPermissionSetsProvisionedToAccount = "SWBExternalService.ListPermissionSetsProvisionedToAccount"
}


export class ListPermissionSetsProvisionedToAccountHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListPermissionSetsProvisionedToAccountXAmzTargetEnum;
}


export class ListPermissionSetsProvisionedToAccountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPermissionSetsProvisionedToAccountQueryParams;

  @Metadata()
  headers: ListPermissionSetsProvisionedToAccountHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListPermissionSetsProvisionedToAccountRequest;
}


export class ListPermissionSetsProvisionedToAccountResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listPermissionSetsProvisionedToAccountResponse?: shared.ListPermissionSetsProvisionedToAccountResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
