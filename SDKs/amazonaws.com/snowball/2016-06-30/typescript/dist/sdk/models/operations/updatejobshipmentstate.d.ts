import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateJobShipmentStateXAmzTargetEnum {
    AwsieSnowballJobManagementServiceUpdateJobShipmentState = "AWSIESnowballJobManagementService.UpdateJobShipmentState"
}
export declare class UpdateJobShipmentStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateJobShipmentStateXAmzTargetEnum;
}
export declare class UpdateJobShipmentStateRequest extends SpeakeasyBase {
    headers: UpdateJobShipmentStateHeaders;
    request: shared.UpdateJobShipmentStateRequest;
}
export declare class UpdateJobShipmentStateResponse extends SpeakeasyBase {
    contentType: string;
    invalidJobStateException?: any;
    invalidResourceException?: any;
    statusCode: number;
    updateJobShipmentStateResult?: Map<string, any>;
}
