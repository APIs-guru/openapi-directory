import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsDeletePathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsDeleteRequest extends SpeakeasyBase {
    pathParams: GistsDeletePathParams;
}
export declare class GistsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
