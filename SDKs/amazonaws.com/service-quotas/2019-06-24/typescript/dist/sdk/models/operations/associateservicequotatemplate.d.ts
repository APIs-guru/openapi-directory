import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AssociateServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624AssociateServiceQuotaTemplate = "ServiceQuotasV20190624.AssociateServiceQuotaTemplate"
}
export declare class AssociateServiceQuotaTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateServiceQuotaTemplateXAmzTargetEnum;
}
export declare class AssociateServiceQuotaTemplateRequest extends SpeakeasyBase {
    headers: AssociateServiceQuotaTemplateHeaders;
    request: Map<string, any>;
}
export declare class AssociateServiceQuotaTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    associateServiceQuotaTemplateResponse?: Map<string, any>;
    contentType: string;
    dependencyAccessDeniedException?: any;
    noAvailableOrganizationException?: any;
    organizationNotInAllFeaturesModeException?: any;
    serviceException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
