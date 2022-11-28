import { SpeakeasyBase } from "../../../internal/utils";
export declare class Account extends SpeakeasyBase {
    creationTime?: string;
    id?: string;
    kind?: string;
    name?: string;
    premium?: boolean;
    subAccounts?: Account[];
    timezone?: string;
}
