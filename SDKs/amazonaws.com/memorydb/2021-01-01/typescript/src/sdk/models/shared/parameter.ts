import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Parameter
/** 
 * Describes an individual setting that controls some aspect of MemoryDB behavior.
**/
export class Parameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowedValues" })
  allowedValues?: string;

  @Metadata({ data: "json, name=DataType" })
  dataType?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MinimumEngineVersion" })
  minimumEngineVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
