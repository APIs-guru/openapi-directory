import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteObjectPathParams extends SpeakeasyBase {
    path: string;
}
export declare class DeleteObjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteObjectRequest extends SpeakeasyBase {
    pathParams: DeleteObjectPathParams;
    headers: DeleteObjectHeaders;
}
export declare class DeleteObjectResponse extends SpeakeasyBase {
    containerNotFoundException?: any;
    contentType: string;
    deleteObjectResponse?: Map<string, any>;
    internalServerError?: any;
    objectNotFoundException?: any;
    statusCode: number;
}
