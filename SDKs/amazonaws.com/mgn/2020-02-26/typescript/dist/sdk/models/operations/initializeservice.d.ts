import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class InitializeServiceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class InitializeServiceRequest extends SpeakeasyBase {
    headers: InitializeServiceHeaders;
}
export declare class InitializeServiceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    initializeServiceResponse?: Map<string, any>;
    statusCode: number;
    validationException?: any;
}
