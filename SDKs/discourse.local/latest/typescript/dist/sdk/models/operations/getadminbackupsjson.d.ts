import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminBackupsJson200ApplicationJson extends SpeakeasyBase {
    filename: string;
    lastModified: string;
    size: number;
}
export declare class GetAdminBackupsJsonResponse extends SpeakeasyBase {
    contentType: string;
    getAdminBackupsJson200ApplicationJsonObjects?: GetAdminBackupsJson200ApplicationJson[];
    statusCode: number;
}
