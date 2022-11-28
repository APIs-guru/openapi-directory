import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationReferenceDataSource = "KinesisAnalytics_20150814.DeleteApplicationReferenceDataSource"
}
export declare class DeleteApplicationReferenceDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationReferenceDataSourceXAmzTargetEnum;
}
export declare class DeleteApplicationReferenceDataSourceRequest extends SpeakeasyBase {
    headers: DeleteApplicationReferenceDataSourceHeaders;
    request: shared.DeleteApplicationReferenceDataSourceRequest;
}
export declare class DeleteApplicationReferenceDataSourceResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApplicationReferenceDataSourceResponse?: Map<string, any>;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
