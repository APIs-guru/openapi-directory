import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrintServerFailureInfo } from "./printserverfailureinfo";


export class BatchDeletePrintServersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedPrintServers", elemType: shared.PrintServerFailureInfo })
  failedPrintServers?: PrintServerFailureInfo[];

  @Metadata({ data: "json, name=printServerIds" })
  printServerIds?: string[];
}
