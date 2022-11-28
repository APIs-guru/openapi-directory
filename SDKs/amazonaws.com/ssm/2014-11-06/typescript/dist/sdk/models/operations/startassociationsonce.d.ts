import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartAssociationsOnceXAmzTargetEnum {
    AmazonSsmStartAssociationsOnce = "AmazonSSM.StartAssociationsOnce"
}
export declare class StartAssociationsOnceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAssociationsOnceXAmzTargetEnum;
}
export declare class StartAssociationsOnceRequest extends SpeakeasyBase {
    headers: StartAssociationsOnceHeaders;
    request: shared.StartAssociationsOnceRequest;
}
export declare class StartAssociationsOnceResponse extends SpeakeasyBase {
    associationDoesNotExist?: any;
    contentType: string;
    invalidAssociation?: any;
    startAssociationsOnceResult?: Map<string, any>;
    statusCode: number;
}
