import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceInformationStringFilter
/** 
 * The filters to describe or get information about your managed instances.
**/
export class InstanceInformationStringFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values: string[];
}
