import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobStatistics4 extends SpeakeasyBase {
  @Metadata({ data: "json, name=destinationUriFileCounts" })
  destinationUriFileCounts?: string[];

  @Metadata({ data: "json, name=inputBytes" })
  inputBytes?: string;
}
