import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTlskeyHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetTlskeyRequest extends SpeakeasyBase {
    headers: GetTlskeyHeaders;
}
export declare class GetTlskeyResponse extends SpeakeasyBase {
    certificate?: shared.Certificate;
    contentType: string;
    statusCode: number;
}
