import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableImportFindingsForProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableImportFindingsForProductRequestBody extends SpeakeasyBase {
    productArn: string;
}
export declare class EnableImportFindingsForProductRequest extends SpeakeasyBase {
    headers: EnableImportFindingsForProductHeaders;
    request: EnableImportFindingsForProductRequestBody;
}
export declare class EnableImportFindingsForProductResponse extends SpeakeasyBase {
    contentType: string;
    enableImportFindingsForProductResponse?: shared.EnableImportFindingsForProductResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceConflictException?: any;
    statusCode: number;
}
