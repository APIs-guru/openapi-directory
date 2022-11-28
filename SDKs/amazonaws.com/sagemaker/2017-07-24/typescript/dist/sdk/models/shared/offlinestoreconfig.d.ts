import { SpeakeasyBase } from "../../../internal/utils";
import { DataCatalogConfig } from "./datacatalogconfig";
import { S3StorageConfig } from "./s3storageconfig";
/**
 * <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
**/
export declare class OfflineStoreConfig extends SpeakeasyBase {
    dataCatalogConfig?: DataCatalogConfig;
    disableGlueTableCreation?: boolean;
    s3StorageConfig: S3StorageConfig;
}
