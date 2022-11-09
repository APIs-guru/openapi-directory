import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetResourceShareAssociationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetResourceShareAssociationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum GetResourceShareAssociationsRequestBodyAssociationStatusEnum {
    Associating = "ASSOCIATING",
    Associated = "ASSOCIATED",
    Failed = "FAILED",
    Disassociating = "DISASSOCIATING",
    Disassociated = "DISASSOCIATED"
}
export declare enum GetResourceShareAssociationsRequestBodyAssociationTypeEnum {
    Principal = "PRINCIPAL",
    Resource = "RESOURCE"
}
export declare class GetResourceShareAssociationsRequestBody extends SpeakeasyBase {
    associationStatus?: GetResourceShareAssociationsRequestBodyAssociationStatusEnum;
    associationType: GetResourceShareAssociationsRequestBodyAssociationTypeEnum;
    maxResults?: number;
    nextToken?: string;
    principal?: string;
    resourceArn?: string;
    resourceShareArns?: string[];
}
export declare class GetResourceShareAssociationsRequest extends SpeakeasyBase {
    queryParams: GetResourceShareAssociationsQueryParams;
    headers: GetResourceShareAssociationsHeaders;
    request: GetResourceShareAssociationsRequestBody;
}
export declare class GetResourceShareAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    getResourceShareAssociationsResponse?: shared.GetResourceShareAssociationsResponse;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    malformedArnException?: any;
    operationNotPermittedException?: any;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unknownResourceException?: any;
}
