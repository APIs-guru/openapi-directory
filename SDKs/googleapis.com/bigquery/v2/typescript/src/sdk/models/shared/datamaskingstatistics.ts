import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DataMaskingStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataMaskingApplied" })
  dataMaskingApplied?: boolean;
}
