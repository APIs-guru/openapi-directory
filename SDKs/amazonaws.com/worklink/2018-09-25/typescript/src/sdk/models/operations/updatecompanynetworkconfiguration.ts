import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCompanyNetworkConfigurationHeaders extends SpeakeasyBase {
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


export class UpdateCompanyNetworkConfigurationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FleetArn" })
  fleetArn: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SubnetIds" })
  subnetIds: string[];

  @Metadata({ data: "json, name=VpcId" })
  vpcId: string;
}


export class UpdateCompanyNetworkConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateCompanyNetworkConfigurationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCompanyNetworkConfigurationRequestBody;
}


export class UpdateCompanyNetworkConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

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

  @Metadata()
  updateCompanyNetworkConfigurationResponse?: Map<string, any>;
}
