import { SpeakeasyBase } from "../../../internal/utils";
import { SessionFilterKeyEnum } from "./sessionfilterkeyenum";
/**
 * Describes a filter for Session Manager information.
**/
export declare class SessionFilter extends SpeakeasyBase {
    key: SessionFilterKeyEnum;
    value: string;
}
