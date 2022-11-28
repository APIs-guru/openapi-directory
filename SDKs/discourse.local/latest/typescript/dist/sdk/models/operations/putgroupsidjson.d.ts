import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutGroupsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutGroupsIdJsonRequestBodyGroup extends SpeakeasyBase {
    name: string;
}
export declare class PutGroupsIdJsonRequestBody extends SpeakeasyBase {
    group: PutGroupsIdJsonRequestBodyGroup;
}
export declare class PutGroupsIdJson200ApplicationJson extends SpeakeasyBase {
    success?: string;
}
export declare class PutGroupsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutGroupsIdJsonPathParams;
    request?: PutGroupsIdJsonRequestBody;
}
export declare class PutGroupsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    putGroupsIdJson200ApplicationJsonObject?: PutGroupsIdJson200ApplicationJson;
    statusCode: number;
}
