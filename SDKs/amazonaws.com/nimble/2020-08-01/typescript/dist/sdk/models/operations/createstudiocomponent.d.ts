import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStudioComponentPathParams extends SpeakeasyBase {
    studioId: string;
}
export declare class CreateStudioComponentHeaders extends SpeakeasyBase {
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
export declare class CreateStudioComponentRequestBodyConfiguration extends SpeakeasyBase {
    activeDirectoryConfiguration?: shared.ActiveDirectoryConfiguration;
    computeFarmConfiguration?: shared.ComputeFarmConfiguration;
    licenseServiceConfiguration?: shared.LicenseServiceConfiguration;
    sharedFileSystemConfiguration?: shared.SharedFileSystemConfiguration;
}
export declare enum CreateStudioComponentRequestBodySubtypeEnum {
    AwsManagedMicrosoftAd = "AWS_MANAGED_MICROSOFT_AD",
    AmazonFsxForWindows = "AMAZON_FSX_FOR_WINDOWS",
    AmazonFsxForLustre = "AMAZON_FSX_FOR_LUSTRE",
    Custom = "CUSTOM"
}
export declare enum CreateStudioComponentRequestBodyTypeEnum {
    ActiveDirectory = "ACTIVE_DIRECTORY",
    SharedFileSystem = "SHARED_FILE_SYSTEM",
    ComputeFarm = "COMPUTE_FARM",
    LicenseService = "LICENSE_SERVICE",
    Custom = "CUSTOM"
}
export declare class CreateStudioComponentRequestBody extends SpeakeasyBase {
    configuration?: CreateStudioComponentRequestBodyConfiguration;
    description?: string;
    ec2SecurityGroupIds?: string[];
    initializationScripts?: shared.StudioComponentInitializationScript[];
    name: string;
    scriptParameters?: shared.ScriptParameterKeyValue[];
    subtype?: CreateStudioComponentRequestBodySubtypeEnum;
    tags?: Map<string, string>;
    type: CreateStudioComponentRequestBodyTypeEnum;
}
export declare class CreateStudioComponentRequest extends SpeakeasyBase {
    pathParams: CreateStudioComponentPathParams;
    headers: CreateStudioComponentHeaders;
    request: CreateStudioComponentRequestBody;
}
export declare class CreateStudioComponentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createStudioComponentResponse?: shared.CreateStudioComponentResponse;
    internalServerErrorException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
