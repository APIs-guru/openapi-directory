import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArchivedResult } from "./archivedresult";



export class AvailabilityResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: ArchivedResult })
  results: ArchivedResult[];
}
