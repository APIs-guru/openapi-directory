import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostContractIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostContractIdSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class PostContractIdRequest extends SpeakeasyBase {
    pathParams: PostContractIdPathParams;
    security: PostContractIdSecurity;
}
export declare class PostContractIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
