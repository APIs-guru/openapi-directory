import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ConnectionImportDataCredentials extends SpeakeasyBase {
    accessToken?: string;
    expiresIn?: number;
    issuedAt?: Date;
    refreshToken: string;
}
export declare class ConnectionImportData extends SpeakeasyBase {
    credentials?: ConnectionImportDataCredentials;
    metadata?: Map<string, any>;
    settings?: Map<string, any>;
}
