import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BlobStoreTransport
/** 
 * Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.
**/
export class BlobStoreTransport extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName: string;

  @Metadata({ data: "json, name=storageName" })
  storageName: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
