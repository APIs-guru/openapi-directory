import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckReadyStatusRequest extends SpeakeasyBase {
    request: shared.CheckReadyStatusRequest;
}
export declare class CheckReadyStatusResponse extends SpeakeasyBase {
    contentType: string;
    example13?: shared.Example13;
    statusCode: number;
}
