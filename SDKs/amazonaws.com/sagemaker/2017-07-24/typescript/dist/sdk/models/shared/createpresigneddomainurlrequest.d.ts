import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreatePresignedDomainUrlRequest extends SpeakeasyBase {
    domainId: string;
    expiresInSeconds?: number;
    sessionExpirationDurationInSeconds?: number;
    userProfileName: string;
}
