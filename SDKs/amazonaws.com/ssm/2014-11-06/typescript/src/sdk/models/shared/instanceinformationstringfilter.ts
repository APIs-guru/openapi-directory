import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceInformationStringFilter
/** 
 * The filters to describe or get information about your managed instances.
**/
export class InstanceInformationStringFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Values" })
  values: string[];
}
