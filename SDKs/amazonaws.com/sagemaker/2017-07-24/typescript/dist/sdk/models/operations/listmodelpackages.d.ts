import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListModelPackagesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListModelPackagesXAmzTargetEnum {
    SageMakerListModelPackages = "SageMaker.ListModelPackages"
}
export declare class ListModelPackagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListModelPackagesXAmzTargetEnum;
}
export declare class ListModelPackagesRequest extends SpeakeasyBase {
    queryParams: ListModelPackagesQueryParams;
    headers: ListModelPackagesHeaders;
    request: shared.ListModelPackagesInput;
}
export declare class ListModelPackagesResponse extends SpeakeasyBase {
    contentType: string;
    listModelPackagesOutput?: shared.ListModelPackagesOutput;
    statusCode: number;
}
