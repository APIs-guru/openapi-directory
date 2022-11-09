import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResolverQueryLogConfigAssociationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListResolverQueryLogConfigAssociationsXAmzTargetEnum {
    Route53ResolverListResolverQueryLogConfigAssociations = "Route53Resolver.ListResolverQueryLogConfigAssociations"
}


export class ListResolverQueryLogConfigAssociationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResolverQueryLogConfigAssociationsXAmzTargetEnum;
}


export class ListResolverQueryLogConfigAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResolverQueryLogConfigAssociationsQueryParams;

  @Metadata()
  headers: ListResolverQueryLogConfigAssociationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResolverQueryLogConfigAssociationsRequest;
}


export class ListResolverQueryLogConfigAssociationsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  listResolverQueryLogConfigAssociationsResponse?: shared.ListResolverQueryLogConfigAssociationsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
