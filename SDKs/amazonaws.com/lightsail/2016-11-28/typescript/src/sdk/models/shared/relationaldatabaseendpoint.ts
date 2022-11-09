import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelationalDatabaseEndpoint
/** 
 * Describes an endpoint for a database.
**/
export class RelationalDatabaseEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
