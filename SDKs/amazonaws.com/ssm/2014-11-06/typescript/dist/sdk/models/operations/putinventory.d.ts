import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutInventoryXAmzTargetEnum {
    AmazonSsmPutInventory = "AmazonSSM.PutInventory"
}
export declare class PutInventoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutInventoryXAmzTargetEnum;
}
export declare class PutInventoryRequest extends SpeakeasyBase {
    headers: PutInventoryHeaders;
    request: shared.PutInventoryRequest;
}
export declare class PutInventoryResponse extends SpeakeasyBase {
    contentType: string;
    customSchemaCountLimitExceededException?: any;
    internalServerError?: any;
    invalidInstanceId?: any;
    invalidInventoryItemContextException?: any;
    invalidItemContentException?: any;
    invalidTypeNameException?: any;
    itemContentMismatchException?: any;
    itemSizeLimitExceededException?: any;
    putInventoryResult?: shared.PutInventoryResult;
    statusCode: number;
    subTypeCountLimitExceededException?: any;
    totalSizeLimitExceededException?: any;
    unsupportedInventoryItemContextException?: any;
    unsupportedInventorySchemaVersionException?: any;
}
