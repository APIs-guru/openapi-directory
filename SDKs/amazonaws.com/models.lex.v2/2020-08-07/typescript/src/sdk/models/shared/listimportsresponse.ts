import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImportSummary } from "./importsummary";


export class ListImportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=botId" })
  botId?: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=importSummaries", elemType: shared.ImportSummary })
  importSummaries?: ImportSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
