import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiKeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiKeysIdRequest extends SpeakeasyBase {
    pathParams: GetApiKeysIdPathParams;
}
export declare class GetApiKeysIdResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
