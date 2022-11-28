import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobStatistics4 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destinationUriFileCounts" })
  destinationUriFileCounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=inputBytes" })
  inputBytes?: string;
}
