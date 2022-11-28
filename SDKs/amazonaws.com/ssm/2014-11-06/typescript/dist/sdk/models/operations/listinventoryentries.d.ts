import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListInventoryEntriesXAmzTargetEnum {
    AmazonSsmListInventoryEntries = "AmazonSSM.ListInventoryEntries"
}
export declare class ListInventoryEntriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListInventoryEntriesXAmzTargetEnum;
}
export declare class ListInventoryEntriesRequest extends SpeakeasyBase {
    headers: ListInventoryEntriesHeaders;
    request: shared.ListInventoryEntriesRequest;
}
export declare class ListInventoryEntriesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidFilter?: any;
    invalidInstanceId?: any;
    invalidNextToken?: any;
    invalidTypeNameException?: any;
    listInventoryEntriesResult?: shared.ListInventoryEntriesResult;
    statusCode: number;
}
