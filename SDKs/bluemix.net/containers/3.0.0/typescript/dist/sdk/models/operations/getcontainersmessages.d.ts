import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetContainersMessagesHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetContainersMessagesRequest extends SpeakeasyBase {
    headers: GetContainersMessagesHeaders;
}
export declare class GetContainersMessages200ApplicationJson extends SpeakeasyBase {
    createdDate?: string;
    message?: string;
}
export declare class GetContainersMessagesResponse extends SpeakeasyBase {
    contentType: string;
    getContainersMessages200ApplicationJsonObject?: GetContainersMessages200ApplicationJson;
    statusCode: number;
}
