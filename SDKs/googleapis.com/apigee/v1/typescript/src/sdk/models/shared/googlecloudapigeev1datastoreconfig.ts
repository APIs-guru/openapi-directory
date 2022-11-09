import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudApigeeV1DatastoreConfig
/** 
 * Configuration detail for datastore
**/
export class GoogleCloudApigeeV1DatastoreConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName?: string;

  @Metadata({ data: "json, name=datasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=tablePrefix" })
  tablePrefix?: string;
}
