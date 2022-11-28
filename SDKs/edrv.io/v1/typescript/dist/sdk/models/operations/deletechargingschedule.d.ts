import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletechargingscheduleRequestBody extends SpeakeasyBase {
    id?: string;
}
export declare class Deletechargingschedule201ApplicationJson extends SpeakeasyBase {
    command?: Map<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class DeletechargingscheduleRequest extends SpeakeasyBase {
    request: DeletechargingscheduleRequestBody;
}
export declare class DeletechargingscheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deletechargingschedule201ApplicationJsonObject?: Deletechargingschedule201ApplicationJson;
}
