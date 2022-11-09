import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrintServer } from "./printserver";


export class ListPrintServersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=printServers", elemType: shared.PrintServer })
  printServers?: PrintServer[];
}
