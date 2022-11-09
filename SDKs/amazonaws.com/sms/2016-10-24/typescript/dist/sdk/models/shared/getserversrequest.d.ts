import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VmServerAddress } from "./vmserveraddress";
export declare class GetServersRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    vmServerAddressList?: VmServerAddress[];
}
