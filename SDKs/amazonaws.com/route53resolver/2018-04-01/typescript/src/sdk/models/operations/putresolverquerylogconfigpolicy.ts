import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutResolverQueryLogConfigPolicyXAmzTargetEnum {
    Route53ResolverPutResolverQueryLogConfigPolicy = "Route53Resolver.PutResolverQueryLogConfigPolicy"
}


export class PutResolverQueryLogConfigPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutResolverQueryLogConfigPolicyXAmzTargetEnum;
}


export class PutResolverQueryLogConfigPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutResolverQueryLogConfigPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutResolverQueryLogConfigPolicyRequest;
}


export class PutResolverQueryLogConfigPolicyResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidPolicyDocument?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  putResolverQueryLogConfigPolicyResponse?: shared.PutResolverQueryLogConfigPolicyResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  unknownResourceException?: any;
}
