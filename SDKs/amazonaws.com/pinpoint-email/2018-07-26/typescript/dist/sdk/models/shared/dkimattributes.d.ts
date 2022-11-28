import { SpeakeasyBase } from "../../../internal/utils";
import { DkimStatusEnum } from "./dkimstatusenum";
/**
 * An object that contains information about the DKIM configuration for an email identity.
**/
export declare class DkimAttributes extends SpeakeasyBase {
    signingEnabled?: boolean;
    status?: DkimStatusEnum;
    tokens?: string[];
}
