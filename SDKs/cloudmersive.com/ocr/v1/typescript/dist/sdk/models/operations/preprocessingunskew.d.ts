import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PreprocessingUnskewRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingUnskewRequestBody extends SpeakeasyBase {
    imageFile: PreprocessingUnskewRequestBodyImageFile;
}
export declare class PreprocessingUnskewSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PreprocessingUnskewRequest extends SpeakeasyBase {
    request: PreprocessingUnskewRequestBody;
    security: PreprocessingUnskewSecurity;
}
export declare class PreprocessingUnskewResponse extends SpeakeasyBase {
    contentType: string;
    preprocessingUnskew200ApplicationJsonByteString?: string;
    preprocessingUnskew200ApplicationXmlByteString?: string;
    preprocessingUnskew200TextJsonByteString?: string;
    preprocessingUnskew200TextXmlByteString?: string;
    statusCode: number;
}
