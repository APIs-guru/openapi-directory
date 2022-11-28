import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlPropertiesInput } from "./cloudsqlproperties";
import { CloudSqlProperties } from "./cloudsqlproperties";



// ConnectionInput
/** 
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
export class ConnectionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSql" })
  cloudSql?: CloudSqlPropertiesInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// Connection
/** 
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSql" })
  cloudSql?: CloudSqlProperties;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=hasCredential" })
  hasCredential?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
