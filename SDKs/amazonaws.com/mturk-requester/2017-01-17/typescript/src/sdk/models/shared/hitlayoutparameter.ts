import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HitLayoutParameter
/** 
 *  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. 
**/
export class HitLayoutParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
