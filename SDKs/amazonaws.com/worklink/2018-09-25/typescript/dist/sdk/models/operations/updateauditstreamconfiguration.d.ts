import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAuditStreamConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAuditStreamConfigurationRequestBody extends SpeakeasyBase {
    auditStreamArn?: string;
    fleetArn: string;
}
export declare class UpdateAuditStreamConfigurationRequest extends SpeakeasyBase {
    headers: UpdateAuditStreamConfigurationHeaders;
    request: UpdateAuditStreamConfigurationRequestBody;
}
export declare class UpdateAuditStreamConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateAuditStreamConfigurationResponse?: Map<string, any>;
}
