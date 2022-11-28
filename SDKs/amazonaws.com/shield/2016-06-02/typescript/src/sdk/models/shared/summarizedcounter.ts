import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SummarizedCounter
/** 
 * The counter that describes a DDoS attack.
**/
export class SummarizedCounter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=Max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=N" })
  n?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Sum" })
  sum?: number;

  @SpeakeasyMetadata({ data: "json, name=Unit" })
  unit?: string;
}
