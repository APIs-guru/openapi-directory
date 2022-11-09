import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBlockIdSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockIdRequest extends SpeakeasyBase {
    pathParams: GetBlockIdPathParams;
    security: GetBlockIdSecurity;
}
export declare class GetBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
