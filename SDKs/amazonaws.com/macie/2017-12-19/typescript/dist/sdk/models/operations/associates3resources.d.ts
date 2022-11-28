import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateS3ResourcesXAmzTargetEnum {
    MacieServiceAssociateS3Resources = "MacieService.AssociateS3Resources"
}
export declare class AssociateS3ResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateS3ResourcesXAmzTargetEnum;
}
export declare class AssociateS3ResourcesRequest extends SpeakeasyBase {
    headers: AssociateS3ResourcesHeaders;
    request: shared.AssociateS3ResourcesRequest;
}
export declare class AssociateS3ResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    associateS3ResourcesResult?: shared.AssociateS3ResourcesResult;
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
