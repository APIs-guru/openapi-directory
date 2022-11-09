import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListOrganizationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOrganizationsXAmzTargetEnum {
    WorkMailServiceListOrganizations = "WorkMailService.ListOrganizations"
}
export declare class ListOrganizationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOrganizationsXAmzTargetEnum;
}
export declare class ListOrganizationsRequest extends SpeakeasyBase {
    queryParams: ListOrganizationsQueryParams;
    headers: ListOrganizationsHeaders;
    request: shared.ListOrganizationsRequest;
}
export declare class ListOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    listOrganizationsResponse?: shared.ListOrganizationsResponse;
    statusCode: number;
}
