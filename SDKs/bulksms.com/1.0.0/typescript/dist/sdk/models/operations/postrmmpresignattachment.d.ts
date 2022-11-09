import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostRmmPreSignAttachmentSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostRmmPreSignAttachmentRequest extends SpeakeasyBase {
    request: shared.PreSignRequest;
    security: PostRmmPreSignAttachmentSecurity;
}
export declare class PostRmmPreSignAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    preSignInfo?: shared.PreSignInfo;
    statusCode: number;
}
