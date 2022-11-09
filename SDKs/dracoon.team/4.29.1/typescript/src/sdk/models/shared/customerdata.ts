import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerData
/** 
 * Customer information
**/
export class CustomerData extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountsLimit" })
  accountsLimit: number;

  @Metadata({ data: "json, name=accountsUsed" })
  accountsUsed: number;

  @Metadata({ data: "json, name=cntFiles" })
  cntFiles?: number;

  @Metadata({ data: "json, name=cntFolders" })
  cntFolders?: number;

  @Metadata({ data: "json, name=cntRooms" })
  cntRooms?: number;

  @Metadata({ data: "json, name=customerEncryptionEnabled" })
  customerEncryptionEnabled: boolean;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isProviderCustomer" })
  isProviderCustomer: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=spaceLimit" })
  spaceLimit: number;

  @Metadata({ data: "json, name=spaceUsed" })
  spaceUsed: number;
}
