import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrintServerFailureInfo } from "./printserverfailureinfo";
import { PrintServer } from "./printserver";


export class BatchCreatePrintServersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failures", elemType: shared.PrintServerFailureInfo })
  failures?: PrintServerFailureInfo[];

  @Metadata({ data: "json, name=printServers", elemType: shared.PrintServer })
  printServers?: PrintServer[];
}
