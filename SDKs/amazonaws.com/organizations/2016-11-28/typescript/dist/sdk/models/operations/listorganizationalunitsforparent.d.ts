import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListOrganizationalUnitsForParentQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListOrganizationalUnitsForParentXAmzTargetEnum {
    AwsOrganizationsV20161128ListOrganizationalUnitsForParent = "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent"
}
export declare class ListOrganizationalUnitsForParentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOrganizationalUnitsForParentXAmzTargetEnum;
}
export declare class ListOrganizationalUnitsForParentRequest extends SpeakeasyBase {
    queryParams: ListOrganizationalUnitsForParentQueryParams;
    headers: ListOrganizationalUnitsForParentHeaders;
    request: shared.ListOrganizationalUnitsForParentRequest;
}
export declare class ListOrganizationalUnitsForParentResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listOrganizationalUnitsForParentResponse?: shared.ListOrganizationalUnitsForParentResponse;
    parentNotFoundException?: any;
    serviceException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
