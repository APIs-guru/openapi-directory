import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAccessPoliciesIdentityTypeEnum {
    User = "USER"
,    Group = "GROUP"
,    Iam = "IAM"
}

export enum ListAccessPoliciesResourceTypeEnum {
    Portal = "PORTAL"
,    Project = "PROJECT"
}


export class ListAccessPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=iamArn" })
  iamArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=identityId" })
  identityId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=identityType" })
  identityType?: ListAccessPoliciesIdentityTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceType" })
  resourceType?: ListAccessPoliciesResourceTypeEnum;
}


export class ListAccessPoliciesHeaders extends SpeakeasyBase {
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
}


export class ListAccessPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAccessPoliciesQueryParams;

  @Metadata()
  headers: ListAccessPoliciesHeaders;
}


export class ListAccessPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listAccessPoliciesResponse?: shared.ListAccessPoliciesResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
