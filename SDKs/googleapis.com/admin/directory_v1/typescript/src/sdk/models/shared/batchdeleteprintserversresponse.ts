import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrintServerFailureInfo } from "./printserverfailureinfo";



export class BatchDeletePrintServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedPrintServers", elemType: PrintServerFailureInfo })
  failedPrintServers?: PrintServerFailureInfo[];

  @SpeakeasyMetadata({ data: "json, name=printServerIds" })
  printServerIds?: string[];
}
