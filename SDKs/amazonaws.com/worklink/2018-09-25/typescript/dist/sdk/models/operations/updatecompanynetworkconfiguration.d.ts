import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateCompanyNetworkConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCompanyNetworkConfigurationRequestBody extends SpeakeasyBase {
    fleetArn: string;
    securityGroupIds: string[];
    subnetIds: string[];
    vpcId: string;
}
export declare class UpdateCompanyNetworkConfigurationRequest extends SpeakeasyBase {
    headers: UpdateCompanyNetworkConfigurationHeaders;
    request: UpdateCompanyNetworkConfigurationRequestBody;
}
export declare class UpdateCompanyNetworkConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateCompanyNetworkConfigurationResponse?: Map<string, any>;
}
