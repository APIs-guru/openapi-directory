import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeIdentityProviderConfigurationHeaders extends SpeakeasyBase {
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
}


export class DescribeIdentityProviderConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;
}


export class DescribeIdentityProviderConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeIdentityProviderConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeIdentityProviderConfigurationRequestBody;
}


export class DescribeIdentityProviderConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeIdentityProviderConfigurationResponse?: shared.DescribeIdentityProviderConfigurationResponse;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  unauthorizedException?: any;
}
