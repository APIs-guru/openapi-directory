import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectUsernameProjectCheckoutKeyPathParams extends SpeakeasyBase {
    project: string;
    username: string;
}
export declare class GetProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
    pathParams: GetProjectUsernameProjectCheckoutKeyPathParams;
}
export declare class GetProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
    contentType: string;
    keys?: shared.Key[];
    statusCode: number;
}
