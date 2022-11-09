import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataCatalogConfig } from "./datacatalogconfig";
import { S3StorageConfig } from "./s3storageconfig";


// OfflineStoreConfig
/** 
 * <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify Amazon Web Services Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
**/
export class OfflineStoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataCatalogConfig" })
  dataCatalogConfig?: DataCatalogConfig;

  @Metadata({ data: "json, name=DisableGlueTableCreation" })
  disableGlueTableCreation?: boolean;

  @Metadata({ data: "json, name=S3StorageConfig" })
  s3StorageConfig: S3StorageConfig;
}
