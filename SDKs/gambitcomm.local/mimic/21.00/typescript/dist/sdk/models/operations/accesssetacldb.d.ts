import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccessSetAcldbPathParams extends SpeakeasyBase {
    databaseName: string;
}
export declare class AccessSetAcldbRequest extends SpeakeasyBase {
    pathParams: AccessSetAcldbPathParams;
}
export declare class AccessSetAcldbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessSetAcldb200ApplicationJsonString?: string;
}
