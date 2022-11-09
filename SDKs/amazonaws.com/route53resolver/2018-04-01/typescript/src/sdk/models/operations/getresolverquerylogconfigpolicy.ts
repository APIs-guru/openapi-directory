import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetResolverQueryLogConfigPolicyXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfigPolicy = "Route53Resolver.GetResolverQueryLogConfigPolicy"
}


export class GetResolverQueryLogConfigPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResolverQueryLogConfigPolicyXAmzTargetEnum;
}


export class GetResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetResolverQueryLogConfigPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResolverQueryLogConfigPolicyRequest;
}


export class GetResolverQueryLogConfigPolicyResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getResolverQueryLogConfigPolicyResponse?: shared.GetResolverQueryLogConfigPolicyResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
