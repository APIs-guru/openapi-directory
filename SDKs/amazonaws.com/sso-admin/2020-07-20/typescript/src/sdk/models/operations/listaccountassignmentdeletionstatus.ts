import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAccountAssignmentDeletionStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAccountAssignmentDeletionStatusXAmzTargetEnum {
    SwbExternalServiceListAccountAssignmentDeletionStatus = "SWBExternalService.ListAccountAssignmentDeletionStatus"
}


export class ListAccountAssignmentDeletionStatusHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAccountAssignmentDeletionStatusXAmzTargetEnum;
}


export class ListAccountAssignmentDeletionStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAccountAssignmentDeletionStatusQueryParams;

  @Metadata()
  headers: ListAccountAssignmentDeletionStatusHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAccountAssignmentDeletionStatusRequest;
}


export class ListAccountAssignmentDeletionStatusResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  listAccountAssignmentDeletionStatusResponse?: shared.ListAccountAssignmentDeletionStatusResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
