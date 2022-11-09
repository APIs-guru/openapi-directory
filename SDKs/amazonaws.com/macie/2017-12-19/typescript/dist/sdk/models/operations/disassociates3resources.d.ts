import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateS3ResourcesXAmzTargetEnum {
    MacieServiceDisassociateS3Resources = "MacieService.DisassociateS3Resources"
}
export declare class DisassociateS3ResourcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateS3ResourcesXAmzTargetEnum;
}
export declare class DisassociateS3ResourcesRequest extends SpeakeasyBase {
    headers: DisassociateS3ResourcesHeaders;
    request: shared.DisassociateS3ResourcesRequest;
}
export declare class DisassociateS3ResourcesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    disassociateS3ResourcesResult?: shared.DisassociateS3ResourcesResult;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
