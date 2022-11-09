import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResolverDnssecConfigsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListResolverDnssecConfigsXAmzTargetEnum {
    Route53ResolverListResolverDnssecConfigs = "Route53Resolver.ListResolverDnssecConfigs"
}


export class ListResolverDnssecConfigsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResolverDnssecConfigsXAmzTargetEnum;
}


export class ListResolverDnssecConfigsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResolverDnssecConfigsQueryParams;

  @Metadata()
  headers: ListResolverDnssecConfigsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResolverDnssecConfigsRequest;
}


export class ListResolverDnssecConfigsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidNextTokenException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listResolverDnssecConfigsResponse?: shared.ListResolverDnssecConfigsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
