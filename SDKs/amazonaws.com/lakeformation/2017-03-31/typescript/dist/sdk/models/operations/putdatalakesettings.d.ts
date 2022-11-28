import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutDataLakeSettingsXAmzTargetEnum {
    AwsLakeFormationPutDataLakeSettings = "AWSLakeFormation.PutDataLakeSettings"
}
export declare class PutDataLakeSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutDataLakeSettingsXAmzTargetEnum;
}
export declare class PutDataLakeSettingsRequest extends SpeakeasyBase {
    headers: PutDataLakeSettingsHeaders;
    request: shared.PutDataLakeSettingsRequest;
}
export declare class PutDataLakeSettingsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceException?: any;
    invalidInputException?: any;
    putDataLakeSettingsResponse?: Map<string, any>;
    statusCode: number;
}
