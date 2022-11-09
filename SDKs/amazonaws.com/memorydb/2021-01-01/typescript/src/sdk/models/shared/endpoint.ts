import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Endpoint
/** 
 * Represents the information required for client programs to connect to the cluster and its nodes.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=Port" })
  port?: number;
}
