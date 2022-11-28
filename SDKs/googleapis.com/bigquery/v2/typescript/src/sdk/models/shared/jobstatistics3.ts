import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobStatistics3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badRecords" })
  badRecords?: string;

  @SpeakeasyMetadata({ data: "json, name=inputFileBytes" })
  inputFileBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=inputFiles" })
  inputFiles?: string;

  @SpeakeasyMetadata({ data: "json, name=outputBytes" })
  outputBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=outputRows" })
  outputRows?: string;
}
