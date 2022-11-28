import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BlobStoreTransport
/** 
 * Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.
**/
export class BlobStoreTransport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName: string;

  @SpeakeasyMetadata({ data: "json, name=storageName" })
  storageName: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
