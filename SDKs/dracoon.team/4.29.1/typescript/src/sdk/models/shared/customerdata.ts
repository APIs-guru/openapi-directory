import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerData
/** 
 * Customer information
**/
export class CustomerData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountsLimit" })
  accountsLimit: number;

  @SpeakeasyMetadata({ data: "json, name=accountsUsed" })
  accountsUsed: number;

  @SpeakeasyMetadata({ data: "json, name=cntFiles" })
  cntFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=cntFolders" })
  cntFolders?: number;

  @SpeakeasyMetadata({ data: "json, name=cntRooms" })
  cntRooms?: number;

  @SpeakeasyMetadata({ data: "json, name=customerEncryptionEnabled" })
  customerEncryptionEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isProviderCustomer" })
  isProviderCustomer: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=spaceLimit" })
  spaceLimit: number;

  @SpeakeasyMetadata({ data: "json, name=spaceUsed" })
  spaceUsed: number;
}
