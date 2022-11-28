import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrintServerFailureInfo } from "./printserverfailureinfo";
import { PrintServer } from "./printserver";



export class BatchCreatePrintServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failures", elemType: PrintServerFailureInfo })
  failures?: PrintServerFailureInfo[];

  @SpeakeasyMetadata({ data: "json, name=printServers", elemType: PrintServer })
  printServers?: PrintServer[];
}
