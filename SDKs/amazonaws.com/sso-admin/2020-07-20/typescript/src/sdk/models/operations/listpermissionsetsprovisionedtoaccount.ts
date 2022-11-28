import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPermissionSetsProvisionedToAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListPermissionSetsProvisionedToAccountXAmzTargetEnum {
    SwbExternalServiceListPermissionSetsProvisionedToAccount = "SWBExternalService.ListPermissionSetsProvisionedToAccount"
}


export class ListPermissionSetsProvisionedToAccountHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListPermissionSetsProvisionedToAccountXAmzTargetEnum;
}


export class ListPermissionSetsProvisionedToAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPermissionSetsProvisionedToAccountQueryParams;

  @SpeakeasyMetadata()
  headers: ListPermissionSetsProvisionedToAccountHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListPermissionSetsProvisionedToAccountRequest;
}


export class ListPermissionSetsProvisionedToAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  listPermissionSetsProvisionedToAccountResponse?: shared.ListPermissionSetsProvisionedToAccountResponse;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
