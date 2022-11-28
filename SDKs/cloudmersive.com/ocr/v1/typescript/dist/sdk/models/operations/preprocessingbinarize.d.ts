import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreprocessingBinarizeRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingBinarizeRequestBody extends SpeakeasyBase {
    imageFile: PreprocessingBinarizeRequestBodyImageFile;
}
export declare class PreprocessingBinarizeSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PreprocessingBinarizeRequest extends SpeakeasyBase {
    request: PreprocessingBinarizeRequestBody;
    security: PreprocessingBinarizeSecurity;
}
export declare class PreprocessingBinarizeResponse extends SpeakeasyBase {
    contentType: string;
    preprocessingBinarize200ApplicationJsonByteString?: string;
    preprocessingBinarize200ApplicationXmlByteString?: string;
    preprocessingBinarize200TextJsonByteString?: string;
    preprocessingBinarize200TextXmlByteString?: string;
    statusCode: number;
}
