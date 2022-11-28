import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListModelPackageGroupsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelPackageGroupsXAmzTargetEnum {
    SageMakerListModelPackageGroups = "SageMaker.ListModelPackageGroups"
}
export declare class ListModelPackageGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelPackageGroupsXAmzTargetEnum;
}
export declare class ListModelPackageGroupsRequest extends SpeakeasyBase {
    queryParams: ListModelPackageGroupsQueryParams;
    headers: ListModelPackageGroupsHeaders;
    request: shared.ListModelPackageGroupsInput;
}
export declare class ListModelPackageGroupsResponse extends SpeakeasyBase {
    contentType: string;
    listModelPackageGroupsOutput?: shared.ListModelPackageGroupsOutput;
    statusCode: number;
}
