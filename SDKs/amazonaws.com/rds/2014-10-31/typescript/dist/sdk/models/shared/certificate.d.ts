import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CA certificate for an Amazon Web Services account.
**/
export declare class Certificate extends SpeakeasyBase {
    certificateArn?: string;
    certificateIdentifier?: string;
    certificateType?: string;
    customerOverride?: boolean;
    customerOverrideValidTill?: Date;
    thumbprint?: string;
    validFrom?: Date;
    validTill?: Date;
}
