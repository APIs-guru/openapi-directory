import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrintServer } from "./printserver";



export class ListPrintServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=printServers", elemType: PrintServer })
  printServers?: PrintServer[];
}
