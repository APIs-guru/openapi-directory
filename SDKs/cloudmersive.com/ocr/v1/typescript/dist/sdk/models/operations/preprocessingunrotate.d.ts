import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PreprocessingUnrotateRequestBodyImageFile extends SpeakeasyBase {
    content: Uint8Array;
    imageFile: string;
}
export declare class PreprocessingUnrotateRequestBody extends SpeakeasyBase {
    imageFile: PreprocessingUnrotateRequestBodyImageFile;
}
export declare class PreprocessingUnrotateSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PreprocessingUnrotateRequest extends SpeakeasyBase {
    request: PreprocessingUnrotateRequestBody;
    security: PreprocessingUnrotateSecurity;
}
export declare class PreprocessingUnrotateResponse extends SpeakeasyBase {
    contentType: string;
    preprocessingUnrotate200ApplicationJsonByteString?: string;
    preprocessingUnrotate200ApplicationXmlByteString?: string;
    preprocessingUnrotate200TextJsonByteString?: string;
    preprocessingUnrotate200TextXmlByteString?: string;
    statusCode: number;
}
