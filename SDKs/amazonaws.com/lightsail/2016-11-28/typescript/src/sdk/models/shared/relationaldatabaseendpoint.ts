import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelationalDatabaseEndpoint
/** 
 * Describes an endpoint for a database.
**/
export class RelationalDatabaseEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
