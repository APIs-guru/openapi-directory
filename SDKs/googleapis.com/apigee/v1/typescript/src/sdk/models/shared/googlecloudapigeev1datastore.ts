import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DatastoreConfig } from "./googlecloudapigeev1datastoreconfig";



// GoogleCloudApigeeV1Datastore
/** 
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
export class GoogleCloudApigeeV1Datastore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=datastoreConfig" })
  datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=org" })
  org?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: string;
}


// GoogleCloudApigeeV1DatastoreInput
/** 
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
export class GoogleCloudApigeeV1DatastoreInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datastoreConfig" })
  datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=targetType" })
  targetType?: string;
}
