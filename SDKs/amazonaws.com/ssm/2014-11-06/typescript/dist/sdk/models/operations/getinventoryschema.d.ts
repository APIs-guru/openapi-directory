import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInventorySchemaQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetInventorySchemaXAmzTargetEnum {
    AmazonSsmGetInventorySchema = "AmazonSSM.GetInventorySchema"
}
export declare class GetInventorySchemaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetInventorySchemaXAmzTargetEnum;
}
export declare class GetInventorySchemaRequest extends SpeakeasyBase {
    queryParams: GetInventorySchemaQueryParams;
    headers: GetInventorySchemaHeaders;
    request: shared.GetInventorySchemaRequest;
}
export declare class GetInventorySchemaResponse extends SpeakeasyBase {
    contentType: string;
    getInventorySchemaResult?: shared.GetInventorySchemaResult;
    internalServerError?: any;
    invalidNextToken?: any;
    invalidTypeNameException?: any;
    statusCode: number;
}
