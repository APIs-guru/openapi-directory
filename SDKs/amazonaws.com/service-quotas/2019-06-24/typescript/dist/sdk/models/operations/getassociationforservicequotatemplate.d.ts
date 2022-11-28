import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAssociationForServiceQuotaTemplateXAmzTargetEnum {
    ServiceQuotasV20190624GetAssociationForServiceQuotaTemplate = "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate"
}
export declare class GetAssociationForServiceQuotaTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAssociationForServiceQuotaTemplateXAmzTargetEnum;
}
export declare class GetAssociationForServiceQuotaTemplateRequest extends SpeakeasyBase {
    headers: GetAssociationForServiceQuotaTemplateHeaders;
    request: Map<string, any>;
}
export declare class GetAssociationForServiceQuotaTemplateResponse extends SpeakeasyBase {
    awsServiceAccessNotEnabledException?: any;
    accessDeniedException?: any;
    contentType: string;
    dependencyAccessDeniedException?: any;
    getAssociationForServiceQuotaTemplateResponse?: shared.GetAssociationForServiceQuotaTemplateResponse;
    noAvailableOrganizationException?: any;
    serviceException?: any;
    serviceQuotaTemplateNotInUseException?: any;
    statusCode: number;
    templatesNotAvailableInRegionException?: any;
    tooManyRequestsException?: any;
}
