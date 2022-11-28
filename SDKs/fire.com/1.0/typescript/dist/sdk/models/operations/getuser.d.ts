import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetUserRequest extends SpeakeasyBase {
    pathParams: GetUserPathParams;
}
export declare class GetUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    oneusersGetResponses200ContentApplication1jsonSchemaItems?: shared.OneusersGetResponses200ContentApplication1jsonSchemaItems;
}
