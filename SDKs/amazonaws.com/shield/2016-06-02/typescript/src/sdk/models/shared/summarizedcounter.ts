import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SummarizedCounter
/** 
 * The counter that describes a DDoS attack.
**/
export class SummarizedCounter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Average" })
  average?: number;

  @Metadata({ data: "json, name=Max" })
  max?: number;

  @Metadata({ data: "json, name=N" })
  n?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Sum" })
  sum?: number;

  @Metadata({ data: "json, name=Unit" })
  unit?: string;
}
