import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockchainIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBlockchainIdSecurity extends SpeakeasyBase {
    key2: shared.SchemeKey2;
}
export declare class GetBlockchainIdRequest extends SpeakeasyBase {
    pathParams: GetBlockchainIdPathParams;
    security: GetBlockchainIdSecurity;
}
export declare class GetBlockchainIdResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    headers: Map<string, string[]>;
    statusCode: number;
}
