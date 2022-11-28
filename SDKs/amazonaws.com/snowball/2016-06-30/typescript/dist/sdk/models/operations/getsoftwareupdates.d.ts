import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSoftwareUpdatesXAmzTargetEnum {
    AwsieSnowballJobManagementServiceGetSoftwareUpdates = "AWSIESnowballJobManagementService.GetSoftwareUpdates"
}
export declare class GetSoftwareUpdatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSoftwareUpdatesXAmzTargetEnum;
}
export declare class GetSoftwareUpdatesRequest extends SpeakeasyBase {
    headers: GetSoftwareUpdatesHeaders;
    request: shared.GetSoftwareUpdatesRequest;
}
export declare class GetSoftwareUpdatesResponse extends SpeakeasyBase {
    contentType: string;
    getSoftwareUpdatesResult?: shared.GetSoftwareUpdatesResult;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    statusCode: number;
}
