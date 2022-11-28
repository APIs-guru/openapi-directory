import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAccessPoliciesIdentityTypeEnum {
    User = "USER",
    Group = "GROUP",
    Iam = "IAM"
}

export enum ListAccessPoliciesResourceTypeEnum {
    Portal = "PORTAL",
    Project = "PROJECT"
}


export class ListAccessPoliciesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=iamArn" })
  iamArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identityId" })
  identityId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=identityType" })
  identityType?: ListAccessPoliciesIdentityTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceId" })
  resourceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceType" })
  resourceType?: ListAccessPoliciesResourceTypeEnum;
}


export class ListAccessPoliciesHeaders extends SpeakeasyBase {
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
}


export class ListAccessPoliciesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAccessPoliciesQueryParams;

  @SpeakeasyMetadata()
  headers: ListAccessPoliciesHeaders;
}


export class ListAccessPoliciesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  invalidRequestException?: any;

  @SpeakeasyMetadata()
  listAccessPoliciesResponse?: shared.ListAccessPoliciesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
