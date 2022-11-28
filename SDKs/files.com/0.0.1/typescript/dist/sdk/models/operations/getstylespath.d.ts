import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStylesPathPathParams extends SpeakeasyBase {
    path: string;
}
export declare class GetStylesPathRequest extends SpeakeasyBase {
    pathParams: GetStylesPathPathParams;
}
export declare class GetStylesPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    styleEntity?: shared.StyleEntity;
}
