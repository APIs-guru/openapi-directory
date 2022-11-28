import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInventoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetInventoryXAmzTargetEnum {
    AmazonSsmGetInventory = "AmazonSSM.GetInventory"
}
export declare class GetInventoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInventoryXAmzTargetEnum;
}
export declare class GetInventoryRequest extends SpeakeasyBase {
    queryParams: GetInventoryQueryParams;
    headers: GetInventoryHeaders;
    request: shared.GetInventoryRequest;
}
export declare class GetInventoryResponse extends SpeakeasyBase {
    contentType: string;
    getInventoryResult?: shared.GetInventoryResult;
    internalServerError?: any;
    invalidAggregatorException?: any;
    invalidFilter?: any;
    invalidInventoryGroupException?: any;
    invalidNextToken?: any;
    invalidResultAttributeException?: any;
    invalidTypeNameException?: any;
    statusCode: number;
}
