import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSoftwareVersionHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
}
export declare class RequestSoftwareVersionRequest extends SpeakeasyBase {
    headers: RequestSoftwareVersionHeaders;
}
export declare class RequestSoftwareVersionResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    softwareVersionData?: shared.SoftwareVersionData;
    statusCode: number;
}
