import { SpeakeasyBase } from "../../../internal/utils/utils";
import { IpSetUpdate } from "./ipsetupdate";
export declare class UpdateIpSetRequest extends SpeakeasyBase {
    changeToken: string;
    ipSetId: string;
    updates: IpSetUpdate[];
}
