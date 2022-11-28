import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPresignUrlSecurity extends SpeakeasyBase {
    apiTokenBasic: shared.SchemeApiTokenBasic;
}
export declare class GetPresignUrlUploadPresignFields extends SpeakeasyBase {
    key: string;
    policy: string;
    xAmzAlgorithm: string;
    xAmzCredential: string;
    xAmzDate: string;
    xAmzSignature: string;
}
export declare enum GetPresignUrlUploadPresignMethodEnum {
    Post = "post"
}
export declare class GetPresignUrlUploadPresign extends SpeakeasyBase {
    fields: GetPresignUrlUploadPresignFields;
    headers: Map<string, any>;
    method?: GetPresignUrlUploadPresignMethodEnum;
    url: string;
}
export declare class GetPresignUrlRequest extends SpeakeasyBase {
    security: GetPresignUrlSecurity;
}
export declare class GetPresignUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationError?: shared.AuthenticationError;
    uploadPresign?: GetPresignUrlUploadPresign;
}
