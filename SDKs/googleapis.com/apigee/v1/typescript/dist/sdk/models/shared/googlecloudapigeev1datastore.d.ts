import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1DatastoreConfig } from "./googlecloudapigeev1datastoreconfig";
/**
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
export declare class GoogleCloudApigeeV1Datastore extends SpeakeasyBase {
    createTime?: string;
    datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig;
    displayName?: string;
    lastUpdateTime?: string;
    org?: string;
    self?: string;
    targetType?: string;
}
/**
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
export declare class GoogleCloudApigeeV1DatastoreInput extends SpeakeasyBase {
    datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig;
    displayName?: string;
    targetType?: string;
}
