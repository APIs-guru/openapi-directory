import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableAllFeaturesXAmzTargetEnum {
    AwsOrganizationsV20161128EnableAllFeatures = "AWSOrganizationsV20161128.EnableAllFeatures"
}
export declare class EnableAllFeaturesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableAllFeaturesXAmzTargetEnum;
}
export declare class EnableAllFeaturesRequest extends SpeakeasyBase {
    headers: EnableAllFeaturesHeaders;
    request: Map<string, any>;
}
export declare class EnableAllFeaturesResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    concurrentModificationException?: any;
    contentType: string;
    enableAllFeaturesResponse?: shared.EnableAllFeaturesResponse;
    handshakeConstraintViolationException?: any;
    invalidInputException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
