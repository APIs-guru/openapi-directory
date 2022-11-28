import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDataLakeSettingsXAmzTargetEnum {
    AwsLakeFormationGetDataLakeSettings = "AWSLakeFormation.GetDataLakeSettings"
}
export declare class GetDataLakeSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataLakeSettingsXAmzTargetEnum;
}
export declare class GetDataLakeSettingsRequest extends SpeakeasyBase {
    headers: GetDataLakeSettingsHeaders;
    request: shared.GetDataLakeSettingsRequest;
}
export declare class GetDataLakeSettingsResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    getDataLakeSettingsResponse?: shared.GetDataLakeSettingsResponse;
    internalServiceException?: any;
    invalidInputException?: any;
    statusCode: number;
}
