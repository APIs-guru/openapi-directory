import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RowLevelSecurityStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=rowLevelSecurityApplied" })
  rowLevelSecurityApplied?: boolean;
}
