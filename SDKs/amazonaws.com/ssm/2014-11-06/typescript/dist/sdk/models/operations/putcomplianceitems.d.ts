import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PutComplianceItemsXAmzTargetEnum {
    AmazonSsmPutComplianceItems = "AmazonSSM.PutComplianceItems"
}
export declare class PutComplianceItemsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutComplianceItemsXAmzTargetEnum;
}
export declare class PutComplianceItemsRequest extends SpeakeasyBase {
    headers: PutComplianceItemsHeaders;
    request: shared.PutComplianceItemsRequest;
}
export declare class PutComplianceItemsResponse extends SpeakeasyBase {
    complianceTypeCountLimitExceededException?: any;
    contentType: string;
    internalServerError?: any;
    invalidItemContentException?: any;
    invalidResourceId?: any;
    invalidResourceType?: any;
    itemSizeLimitExceededException?: any;
    putComplianceItemsResult?: Map<string, any>;
    statusCode: number;
    totalSizeLimitExceededException?: any;
}
