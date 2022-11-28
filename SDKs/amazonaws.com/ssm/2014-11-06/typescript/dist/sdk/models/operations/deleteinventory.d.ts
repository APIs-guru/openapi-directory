import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteInventoryXAmzTargetEnum {
    AmazonSsmDeleteInventory = "AmazonSSM.DeleteInventory"
}
export declare class DeleteInventoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInventoryXAmzTargetEnum;
}
export declare class DeleteInventoryRequest extends SpeakeasyBase {
    headers: DeleteInventoryHeaders;
    request: shared.DeleteInventoryRequest;
}
export declare class DeleteInventoryResponse extends SpeakeasyBase {
    contentType: string;
    deleteInventoryResult?: shared.DeleteInventoryResult;
    internalServerError?: any;
    invalidDeleteInventoryParametersException?: any;
    invalidInventoryRequestException?: any;
    invalidOptionException?: any;
    invalidTypeNameException?: any;
    statusCode: number;
}
