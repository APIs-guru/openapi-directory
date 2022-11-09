import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetResolverDnssecConfigXAmzTargetEnum {
    Route53ResolverGetResolverDnssecConfig = "Route53Resolver.GetResolverDnssecConfig"
}


export class GetResolverDnssecConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetResolverDnssecConfigXAmzTargetEnum;
}


export class GetResolverDnssecConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetResolverDnssecConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetResolverDnssecConfigRequest;
}


export class GetResolverDnssecConfigResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getResolverDnssecConfigResponse?: shared.GetResolverDnssecConfigResponse;

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
