import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSecurityPoliciesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListSecurityPoliciesXAmzTargetEnum {
    TransferServiceListSecurityPolicies = "TransferService.ListSecurityPolicies"
}


export class ListSecurityPoliciesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListSecurityPoliciesXAmzTargetEnum;
}


export class ListSecurityPoliciesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSecurityPoliciesQueryParams;

  @Metadata()
  headers: ListSecurityPoliciesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSecurityPoliciesRequest;
}


export class ListSecurityPoliciesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceError?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listSecurityPoliciesResponse?: shared.ListSecurityPoliciesResponse;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
