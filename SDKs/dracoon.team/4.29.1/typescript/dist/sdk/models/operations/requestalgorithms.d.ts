import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAlgorithmsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestAlgorithmsRequest extends SpeakeasyBase {
    headers: RequestAlgorithmsHeaders;
}
export declare class RequestAlgorithmsResponse extends SpeakeasyBase {
    algorithmVersionInfoList?: shared.AlgorithmVersionInfoList;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
