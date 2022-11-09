import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetResolverRuleAssociationXAmzTargetEnum {
    Route53ResolverGetResolverRuleAssociation = "Route53Resolver.GetResolverRuleAssociation"
}


export class GetResolverRuleAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResolverRuleAssociationXAmzTargetEnum;
}


export class GetResolverRuleAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetResolverRuleAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResolverRuleAssociationRequest;
}


export class GetResolverRuleAssociationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResolverRuleAssociationResponse?: shared.GetResolverRuleAssociationResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
