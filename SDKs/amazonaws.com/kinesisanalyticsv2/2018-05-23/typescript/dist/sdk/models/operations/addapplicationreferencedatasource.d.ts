import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AddApplicationReferenceDataSourceXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationReferenceDataSource = "KinesisAnalytics_20180523.AddApplicationReferenceDataSource"
}
export declare class AddApplicationReferenceDataSourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationReferenceDataSourceXAmzTargetEnum;
}
export declare class AddApplicationReferenceDataSourceRequest extends SpeakeasyBase {
    headers: AddApplicationReferenceDataSourceHeaders;
    request: shared.AddApplicationReferenceDataSourceRequest;
}
export declare class AddApplicationReferenceDataSourceResponse extends SpeakeasyBase {
    addApplicationReferenceDataSourceResponse?: shared.AddApplicationReferenceDataSourceResponse;
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
