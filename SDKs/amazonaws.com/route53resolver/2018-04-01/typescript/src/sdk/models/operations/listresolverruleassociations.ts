import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListResolverRuleAssociationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListResolverRuleAssociationsXAmzTargetEnum {
    Route53ResolverListResolverRuleAssociations = "Route53Resolver.ListResolverRuleAssociations"
}


export class ListResolverRuleAssociationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListResolverRuleAssociationsXAmzTargetEnum;
}


export class ListResolverRuleAssociationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListResolverRuleAssociationsQueryParams;

  @Metadata()
  headers: ListResolverRuleAssociationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListResolverRuleAssociationsRequest;
}


export class ListResolverRuleAssociationsResponse extends SpeakeasyBase {
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
  listResolverRuleAssociationsResponse?: shared.ListResolverRuleAssociationsResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
