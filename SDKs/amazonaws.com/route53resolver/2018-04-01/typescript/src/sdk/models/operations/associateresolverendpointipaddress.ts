import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AssociateResolverEndpointIpAddressXAmzTargetEnum {
    Route53ResolverAssociateResolverEndpointIpAddress = "Route53Resolver.AssociateResolverEndpointIpAddress"
}


export class AssociateResolverEndpointIpAddressHeaders extends SpeakeasyBase {
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
  xAmzTarget: AssociateResolverEndpointIpAddressXAmzTargetEnum;
}


export class AssociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: AssociateResolverEndpointIpAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AssociateResolverEndpointIpAddressRequest;
}


export class AssociateResolverEndpointIpAddressResponse extends SpeakeasyBase {
  @Metadata()
  associateResolverEndpointIpAddressResponse?: shared.AssociateResolverEndpointIpAddressResponse;

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
  resourceExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
