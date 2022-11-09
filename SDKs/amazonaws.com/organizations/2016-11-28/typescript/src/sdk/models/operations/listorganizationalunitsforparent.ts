import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListOrganizationalUnitsForParentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListOrganizationalUnitsForParentXAmzTargetEnum {
    AwsOrganizationsV20161128ListOrganizationalUnitsForParent = "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent"
}


export class ListOrganizationalUnitsForParentHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListOrganizationalUnitsForParentXAmzTargetEnum;
}


export class ListOrganizationalUnitsForParentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListOrganizationalUnitsForParentQueryParams;

  @Metadata()
  headers: ListOrganizationalUnitsForParentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListOrganizationalUnitsForParentRequest;
}


export class ListOrganizationalUnitsForParentResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listOrganizationalUnitsForParentResponse?: shared.ListOrganizationalUnitsForParentResponse;

  @Metadata()
  parentNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
