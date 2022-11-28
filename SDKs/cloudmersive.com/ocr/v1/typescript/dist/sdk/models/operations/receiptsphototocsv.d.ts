import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReceiptsPhotoToCsvRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class ReceiptsPhotoToCsvRequestBody extends SpeakeasyBase {
    imageFile: ReceiptsPhotoToCsvRequestBodyImageFile;
}
export declare class ReceiptsPhotoToCsvSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class ReceiptsPhotoToCsvRequest extends SpeakeasyBase {
    request: ReceiptsPhotoToCsvRequestBody;
    security: ReceiptsPhotoToCsvSecurity;
}
export declare class ReceiptsPhotoToCsvResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    receiptsPhotoToCsv200ApplicationJsonObject?: Map<string, any>;
    receiptsPhotoToCsv200TextJsonObject?: Map<string, any>;
    statusCode: number;
}
