import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateTokenRequest extends SpeakeasyBase {
    clientToken: string;
    expirationInDays?: number;
    licenseArn: string;
    roleArns?: string[];
    tokenProperties?: string[];
}
