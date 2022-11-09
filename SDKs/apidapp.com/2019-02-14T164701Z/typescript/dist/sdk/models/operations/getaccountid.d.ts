import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAccountIdSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetAccountIdRequest extends SpeakeasyBase {
    pathParams: GetAccountIdPathParams;
    security: GetAccountIdSecurity;
}
export declare class GetAccountIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
