import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExternalConnection extends SpeakeasyBase {
    accessToken?: string;
    accessTokenSecret?: string;
    data?: string;
    expiresOn?: Date;
    externalUserId?: string;
    externalUsername?: string;
    id?: number;
    provider?: string;
    userId?: number;
}
