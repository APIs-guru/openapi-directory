import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExportSummary } from "./exportsummary";


export class ListExportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=exportSummaries", elemType: shared.ExportSummary })
  exportSummaries?: ExportSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
