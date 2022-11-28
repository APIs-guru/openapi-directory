import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportSummary } from "./exportsummary";



export class ListExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=exportSummaries", elemType: ExportSummary })
  exportSummaries?: ExportSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
