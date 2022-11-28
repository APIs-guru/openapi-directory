import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableSharingWithAwsOrganizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableSharingWithAwsOrganizationRequest extends SpeakeasyBase {
    headers: EnableSharingWithAwsOrganizationHeaders;
}
export declare class EnableSharingWithAwsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    enableSharingWithAwsOrganizationResponse?: shared.EnableSharingWithAwsOrganizationResponse;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
