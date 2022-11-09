import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Client } from "./client";


// ListClientsResponse
/** 
 * Response message for the list method.
**/
export class ListClientsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clients", elemType: shared.Client })
  clients?: Client[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
