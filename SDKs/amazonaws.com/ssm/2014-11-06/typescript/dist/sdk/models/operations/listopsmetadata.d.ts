import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOpsMetadataQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOpsMetadataXAmzTargetEnum {
    AmazonSsmListOpsMetadata = "AmazonSSM.ListOpsMetadata"
}
export declare class ListOpsMetadataHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOpsMetadataXAmzTargetEnum;
}
export declare class ListOpsMetadataRequest extends SpeakeasyBase {
    queryParams: ListOpsMetadataQueryParams;
    headers: ListOpsMetadataHeaders;
    request: shared.ListOpsMetadataRequest;
}
export declare class ListOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    listOpsMetadataResult?: shared.ListOpsMetadataResult;
    opsMetadataInvalidArgumentException?: any;
    statusCode: number;
}
