import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1DatastoreConfig } from "./googlecloudapigeev1datastoreconfig";


// GoogleCloudApigeeV1Datastore
/** 
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
export class GoogleCloudApigeeV1Datastore extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=datastoreConfig" })
  datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=org" })
  org?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=targetType" })
  targetType?: string;
}
