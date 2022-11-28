import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Customer information
**/
export declare class CustomerData extends SpeakeasyBase {
    accountsLimit: number;
    accountsUsed: number;
    cntFiles?: number;
    cntFolders?: number;
    cntRooms?: number;
    customerEncryptionEnabled: boolean;
    id: number;
    isProviderCustomer: boolean;
    name: string;
    spaceLimit: number;
    spaceUsed: number;
}
