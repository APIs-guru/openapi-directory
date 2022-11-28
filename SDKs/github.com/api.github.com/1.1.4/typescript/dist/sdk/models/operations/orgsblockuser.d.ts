import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsBlockUserPathParams extends SpeakeasyBase {
    org: string;
    username: string;
}
export declare class OrgsBlockUserRequest extends SpeakeasyBase {
    pathParams: OrgsBlockUserPathParams;
}
export declare class OrgsBlockUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationError?: shared.ValidationError;
}
