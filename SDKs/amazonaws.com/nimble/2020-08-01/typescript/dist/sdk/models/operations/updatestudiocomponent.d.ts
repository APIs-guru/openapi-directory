import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStudioComponentPathParams extends SpeakeasyBase {
    studioComponentId: string;
    studioId: string;
}
export declare class UpdateStudioComponentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzClientToken?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The configuration of the studio component, based on component type.
**/
export declare class UpdateStudioComponentRequestBodyConfiguration extends SpeakeasyBase {
    activeDirectoryConfiguration?: shared.ActiveDirectoryConfiguration;
    computeFarmConfiguration?: shared.ComputeFarmConfiguration;
    licenseServiceConfiguration?: shared.LicenseServiceConfiguration;
    sharedFileSystemConfiguration?: shared.SharedFileSystemConfiguration;
}
export declare enum UpdateStudioComponentRequestBodySubtypeEnum {
    AwsManagedMicrosoftAd = "AWS_MANAGED_MICROSOFT_AD",
    AmazonFsxForWindows = "AMAZON_FSX_FOR_WINDOWS",
    AmazonFsxForLustre = "AMAZON_FSX_FOR_LUSTRE",
    Custom = "CUSTOM"
}
export declare enum UpdateStudioComponentRequestBodyTypeEnum {
    ActiveDirectory = "ACTIVE_DIRECTORY",
    SharedFileSystem = "SHARED_FILE_SYSTEM",
    ComputeFarm = "COMPUTE_FARM",
    LicenseService = "LICENSE_SERVICE",
    Custom = "CUSTOM"
}
export declare class UpdateStudioComponentRequestBody extends SpeakeasyBase {
    configuration?: UpdateStudioComponentRequestBodyConfiguration;
    description?: string;
    ec2SecurityGroupIds?: string[];
    initializationScripts?: shared.StudioComponentInitializationScript[];
    name?: string;
    scriptParameters?: shared.ScriptParameterKeyValue[];
    subtype?: UpdateStudioComponentRequestBodySubtypeEnum;
    type?: UpdateStudioComponentRequestBodyTypeEnum;
}
export declare class UpdateStudioComponentRequest extends SpeakeasyBase {
    pathParams: UpdateStudioComponentPathParams;
    headers: UpdateStudioComponentHeaders;
    request: UpdateStudioComponentRequestBody;
}
export declare class UpdateStudioComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateStudioComponentResponse?: shared.UpdateStudioComponentResponse;
    validationException?: any;
}
