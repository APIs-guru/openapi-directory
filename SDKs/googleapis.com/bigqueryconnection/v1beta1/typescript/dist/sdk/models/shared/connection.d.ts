import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlProperties } from "./cloudsqlproperties";
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
