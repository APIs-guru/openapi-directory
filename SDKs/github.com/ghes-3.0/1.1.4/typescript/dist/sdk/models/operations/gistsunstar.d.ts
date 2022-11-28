import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsUnstarPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsUnstarRequest extends SpeakeasyBase {
    pathParams: GistsUnstarPathParams;
}
export declare class GistsUnstarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
