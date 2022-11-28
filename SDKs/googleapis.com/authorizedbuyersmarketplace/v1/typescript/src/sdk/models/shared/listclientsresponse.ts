import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";



// ListClientsResponse
/** 
 * Response message for the list method.
**/
export class ListClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clients", elemType: Client })
  clients?: Client[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
