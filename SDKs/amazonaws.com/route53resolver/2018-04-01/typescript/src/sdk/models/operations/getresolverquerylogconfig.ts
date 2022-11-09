import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfig = "Route53Resolver.GetResolverQueryLogConfig"
}


export class GetResolverQueryLogConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResolverQueryLogConfigXAmzTargetEnum;
}


export class GetResolverQueryLogConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetResolverQueryLogConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResolverQueryLogConfigRequest;
}


export class GetResolverQueryLogConfigResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getResolverQueryLogConfigResponse?: shared.GetResolverQueryLogConfigResponse;

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
