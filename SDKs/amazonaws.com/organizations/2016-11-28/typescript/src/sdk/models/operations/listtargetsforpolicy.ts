import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListTargetsForPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListTargetsForPolicyXAmzTargetEnum {
    AwsOrganizationsV20161128ListTargetsForPolicy = "AWSOrganizationsV20161128.ListTargetsForPolicy"
}


export class ListTargetsForPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListTargetsForPolicyXAmzTargetEnum;
}


export class ListTargetsForPolicyRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListTargetsForPolicyQueryParams;

  @Metadata()
  headers: ListTargetsForPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListTargetsForPolicyRequest;
}


export class ListTargetsForPolicyResponse extends SpeakeasyBase {
  @Metadata()
  awsOrganizationsNotInUseException?: any;

  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  listTargetsForPolicyResponse?: shared.ListTargetsForPolicyResponse;

  @Metadata()
  policyNotFoundException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unsupportedApiEndpointException?: any;
}
