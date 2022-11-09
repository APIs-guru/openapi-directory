import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisassociateResolverEndpointIpAddressXAmzTargetEnum {
    Route53ResolverDisassociateResolverEndpointIpAddress = "Route53Resolver.DisassociateResolverEndpointIpAddress"
}


export class DisassociateResolverEndpointIpAddressHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisassociateResolverEndpointIpAddressXAmzTargetEnum;
}


export class DisassociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisassociateResolverEndpointIpAddressHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisassociateResolverEndpointIpAddressRequest;
}


export class DisassociateResolverEndpointIpAddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  disassociateResolverEndpointIpAddressResponse?: shared.DisassociateResolverEndpointIpAddressResponse;

  @Metadata()
  internalServiceErrorException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceExistsException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
