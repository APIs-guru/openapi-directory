import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsStarPathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsStarRequest extends SpeakeasyBase {
    pathParams: GistsStarPathParams;
}
export declare class GistsStarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
