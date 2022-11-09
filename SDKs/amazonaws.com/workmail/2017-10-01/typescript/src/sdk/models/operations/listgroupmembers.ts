import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListGroupMembersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListGroupMembersXAmzTargetEnum {
    WorkMailServiceListGroupMembers = "WorkMailService.ListGroupMembers"
}


export class ListGroupMembersHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListGroupMembersXAmzTargetEnum;
}


export class ListGroupMembersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListGroupMembersQueryParams;

  @Metadata()
  headers: ListGroupMembersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListGroupMembersRequest;
}


export class ListGroupMembersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityNotFoundException?: any;

  @Metadata()
  entityStateException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listGroupMembersResponse?: shared.ListGroupMembersResponse;

  @Metadata()
  organizationNotFoundException?: any;

  @Metadata()
  organizationStateException?: any;

  @Metadata()
  statusCode: number;
}
