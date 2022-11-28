import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlPropertiesInput } from "./cloudsqlproperties";
import { CloudSqlProperties } from "./cloudsqlproperties";
/**
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
export declare class ConnectionInput extends SpeakeasyBase {
    cloudSql?: CloudSqlPropertiesInput;
    description?: string;
    friendlyName?: string;
    name?: string;
}
/**
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
export declare class Connection extends SpeakeasyBase {
    cloudSql?: CloudSqlProperties;
    creationTime?: string;
    description?: string;
    friendlyName?: string;
    hasCredential?: boolean;
    lastModifiedTime?: string;
    name?: string;
}
