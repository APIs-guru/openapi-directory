import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicPreviewResponse extends SpeakeasyBase {
    contentType: string;
    samsungPreview?: shared.SamsungPreview;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
