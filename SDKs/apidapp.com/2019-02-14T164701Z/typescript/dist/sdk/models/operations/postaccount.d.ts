import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class PostAccountRequest extends SpeakeasyBase {
    security: PostAccountSecurity;
}
export declare class PostAccountResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
