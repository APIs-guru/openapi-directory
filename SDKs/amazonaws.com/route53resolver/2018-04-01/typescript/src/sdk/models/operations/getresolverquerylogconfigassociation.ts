import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetResolverQueryLogConfigAssociationXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfigAssociation = "Route53Resolver.GetResolverQueryLogConfigAssociation"
}


export class GetResolverQueryLogConfigAssociationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResolverQueryLogConfigAssociationXAmzTargetEnum;
}


export class GetResolverQueryLogConfigAssociationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetResolverQueryLogConfigAssociationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResolverQueryLogConfigAssociationRequest;
}


export class GetResolverQueryLogConfigAssociationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getResolverQueryLogConfigAssociationResponse?: shared.GetResolverQueryLogConfigAssociationResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
