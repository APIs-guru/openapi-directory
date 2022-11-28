import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSigninsQueryParams extends SpeakeasyBase {
    lessThan?: number;
    returnCount?: number;
}
export declare class GetSigninsRequest extends SpeakeasyBase {
    queryParams: GetSigninsQueryParams;
}
export declare class GetSigninsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    invalidToken?: shared.InvalidToken;
    keyFailure?: shared.KeyFailure;
    signins?: shared.Signin[];
}
