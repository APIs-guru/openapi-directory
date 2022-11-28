import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NestedParameter
/** 
 * JSON template for a parameter used in various reports.
**/
export class NestedParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intValue" })
  intValue?: string;

  @SpeakeasyMetadata({ data: "json, name=multiBoolValue" })
  multiBoolValue?: boolean[];

  @SpeakeasyMetadata({ data: "json, name=multiIntValue" })
  multiIntValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=multiValue" })
  multiValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
