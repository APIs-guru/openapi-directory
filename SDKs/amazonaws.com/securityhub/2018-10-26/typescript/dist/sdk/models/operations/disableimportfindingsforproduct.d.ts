import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableImportFindingsForProductPathParams extends SpeakeasyBase {
    productSubscriptionArn: string;
}
export declare class DisableImportFindingsForProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableImportFindingsForProductRequest extends SpeakeasyBase {
    pathParams: DisableImportFindingsForProductPathParams;
    headers: DisableImportFindingsForProductHeaders;
}
export declare class DisableImportFindingsForProductResponse extends SpeakeasyBase {
    contentType: string;
    disableImportFindingsForProductResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
