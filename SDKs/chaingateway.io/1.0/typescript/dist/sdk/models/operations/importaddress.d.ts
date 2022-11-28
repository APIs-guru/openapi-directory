import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class ImportAddressRequest extends SpeakeasyBase {
    headers: ImportAddressHeaders;
    request: shared.ImportAddressRequest;
}
export declare class ImportAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    importAddress?: shared.ImportAddress;
}
