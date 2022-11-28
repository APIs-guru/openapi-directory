import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WorkTypeApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class WorkTypeApiAllRequest extends SpeakeasyBase {
    headers: WorkTypeApiAllHeaders;
}
export declare class WorkTypeApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    workTypeDetailsApiModels?: shared.WorkTypeDetailsApiModel[];
}
