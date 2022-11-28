import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportSummary } from "./importsummary";



export class ListImportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botId" })
  botId?: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=importSummaries", elemType: ImportSummary })
  importSummaries?: ImportSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
