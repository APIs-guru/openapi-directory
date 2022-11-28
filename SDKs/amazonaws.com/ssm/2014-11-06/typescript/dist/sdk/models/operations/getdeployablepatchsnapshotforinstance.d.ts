import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetDeployablePatchSnapshotForInstanceXAmzTargetEnum {
    AmazonSsmGetDeployablePatchSnapshotForInstance = "AmazonSSM.GetDeployablePatchSnapshotForInstance"
}
export declare class GetDeployablePatchSnapshotForInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeployablePatchSnapshotForInstanceXAmzTargetEnum;
}
export declare class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
    headers: GetDeployablePatchSnapshotForInstanceHeaders;
    request: shared.GetDeployablePatchSnapshotForInstanceRequest;
}
export declare class GetDeployablePatchSnapshotForInstanceResponse extends SpeakeasyBase {
    contentType: string;
    getDeployablePatchSnapshotForInstanceResult?: shared.GetDeployablePatchSnapshotForInstanceResult;
    internalServerError?: any;
    statusCode: number;
    unsupportedFeatureRequiredException?: any;
    unsupportedOperatingSystem?: any;
}
