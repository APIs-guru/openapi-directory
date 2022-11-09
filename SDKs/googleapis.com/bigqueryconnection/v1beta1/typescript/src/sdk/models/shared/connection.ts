import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlProperties } from "./cloudsqlproperties";


// Connection
/** 
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSql" })
  cloudSql?: CloudSqlProperties;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=hasCredential" })
  hasCredential?: boolean;

  @Metadata({ data: "json, name=lastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
