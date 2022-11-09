import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20180523DeleteApplicationReferenceDataSource = "KinesisAnalytics_20180523.DeleteApplicationReferenceDataSource"
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
    deleteApplicationReferenceDataSourceResponse?: shared.DeleteApplicationReferenceDataSourceResponse;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
