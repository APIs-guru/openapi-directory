import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateConnectorXAmzTargetEnum {
    AwsServerMigrationServiceV20161024DisassociateConnector = "AWSServerMigrationService_V2016_10_24.DisassociateConnector"
}
export declare class DisassociateConnectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConnectorXAmzTargetEnum;
}
export declare class DisassociateConnectorRequest extends SpeakeasyBase {
    headers: DisassociateConnectorHeaders;
    request: shared.DisassociateConnectorRequest;
}
export declare class DisassociateConnectorResponse extends SpeakeasyBase {
    contentType: string;
    disassociateConnectorResponse?: Map<string, any>;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
