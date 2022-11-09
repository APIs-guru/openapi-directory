import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NestedParameter
/** 
 * JSON template for a parameter used in various reports.
**/
export class NestedParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=intValue" })
  intValue?: string;

  @Metadata({ data: "json, name=multiBoolValue" })
  multiBoolValue?: boolean[];

  @Metadata({ data: "json, name=multiIntValue" })
  multiIntValue?: string[];

  @Metadata({ data: "json, name=multiValue" })
  multiValue?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
