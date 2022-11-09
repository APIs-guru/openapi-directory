import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DataMaskingStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataMaskingApplied" })
  dataMaskingApplied?: boolean;
}
