import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RowLevelSecurityStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rowLevelSecurityApplied" })
  rowLevelSecurityApplied?: boolean;
}
