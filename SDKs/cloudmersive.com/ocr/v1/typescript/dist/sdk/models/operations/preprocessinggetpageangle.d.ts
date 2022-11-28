import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreprocessingGetPageAngleRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingGetPageAngleRequestBody extends SpeakeasyBase {
    imageFile: PreprocessingGetPageAngleRequestBodyImageFile;
}
export declare class PreprocessingGetPageAngleSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PreprocessingGetPageAngleRequest extends SpeakeasyBase {
    request: PreprocessingGetPageAngleRequestBody;
    security: PreprocessingGetPageAngleSecurity;
}
export declare class PreprocessingGetPageAngleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getPageAngleResult?: shared.GetPageAngleResult;
    statusCode: number;
}
