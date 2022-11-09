import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ExportAddressHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class ExportAddressRequest extends SpeakeasyBase {
    headers: ExportAddressHeaders;
    request: shared.ExportAddressRequest;
}
export declare class ExportAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    exportAddress?: shared.ExportAddress;
}
