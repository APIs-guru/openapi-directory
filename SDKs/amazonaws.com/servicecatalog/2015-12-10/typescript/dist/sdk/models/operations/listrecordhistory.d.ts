import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListRecordHistoryXAmzTargetEnum {
    Aws242ServiceCatalogServiceListRecordHistory = "AWS242ServiceCatalogService.ListRecordHistory"
}
export declare class ListRecordHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRecordHistoryXAmzTargetEnum;
}
export declare class ListRecordHistoryRequest extends SpeakeasyBase {
    headers: ListRecordHistoryHeaders;
    request: shared.ListRecordHistoryInput;
}
export declare class ListRecordHistoryResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listRecordHistoryOutput?: shared.ListRecordHistoryOutput;
    statusCode: number;
}
