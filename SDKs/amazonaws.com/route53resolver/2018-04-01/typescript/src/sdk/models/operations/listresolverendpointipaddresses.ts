import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResolverEndpointIpAddressesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListResolverEndpointIpAddressesXAmzTargetEnum {
    Route53ResolverListResolverEndpointIpAddresses = "Route53Resolver.ListResolverEndpointIpAddresses"
}


export class ListResolverEndpointIpAddressesHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResolverEndpointIpAddressesXAmzTargetEnum;
}


export class ListResolverEndpointIpAddressesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResolverEndpointIpAddressesQueryParams;

  @Metadata()
  headers: ListResolverEndpointIpAddressesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResolverEndpointIpAddressesRequest;
}


export class ListResolverEndpointIpAddressesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  listResolverEndpointIpAddressesResponse?: shared.ListResolverEndpointIpAddressesResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
