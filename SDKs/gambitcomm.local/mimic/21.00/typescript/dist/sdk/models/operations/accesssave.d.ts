import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccessSavePathParams extends SpeakeasyBase {
    filename: string;
}
export declare class AccessSaveRequest extends SpeakeasyBase {
    pathParams: AccessSavePathParams;
}
export declare class AccessSaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    accessSave200ApplicationJsonStrings?: string[];
}
