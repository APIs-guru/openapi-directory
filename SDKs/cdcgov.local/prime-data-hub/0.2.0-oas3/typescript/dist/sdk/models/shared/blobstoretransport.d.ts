import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Moves results to a Azure Blob Store. Typcially used for HHS Protect interfaces.
**/
export declare class BlobStoreTransport extends SpeakeasyBase {
    containerName: string;
    storageName: string;
    type: string;
}
