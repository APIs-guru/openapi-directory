import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobStatistics3 extends SpeakeasyBase {
  @Metadata({ data: "json, name=badRecords" })
  badRecords?: string;

  @Metadata({ data: "json, name=inputFileBytes" })
  inputFileBytes?: string;

  @Metadata({ data: "json, name=inputFiles" })
  inputFiles?: string;

  @Metadata({ data: "json, name=outputBytes" })
  outputBytes?: string;

  @Metadata({ data: "json, name=outputRows" })
  outputRows?: string;
}
