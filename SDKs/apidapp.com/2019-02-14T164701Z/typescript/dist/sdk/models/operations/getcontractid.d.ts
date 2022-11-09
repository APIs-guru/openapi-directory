import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetContractIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetContractIdSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetContractIdRequest extends SpeakeasyBase {
    pathParams: GetContractIdPathParams;
    security: GetContractIdSecurity;
}
export declare class GetContractIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
