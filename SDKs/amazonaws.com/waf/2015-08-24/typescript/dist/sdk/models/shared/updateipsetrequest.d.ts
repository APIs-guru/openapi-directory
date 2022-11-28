import { SpeakeasyBase } from "../../../internal/utils";
import { IpSetUpdate } from "./ipsetupdate";
export declare class UpdateIpSetRequest extends SpeakeasyBase {
    changeToken: string;
    ipSetId: string;
    updates: IpSetUpdate[];
}
