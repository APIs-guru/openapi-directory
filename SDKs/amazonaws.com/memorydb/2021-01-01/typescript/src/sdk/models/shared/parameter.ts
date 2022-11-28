import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Parameter
/** 
 * Describes an individual setting that controls some aspect of MemoryDB behavior.
**/
export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowedValues" })
  allowedValues?: string;

  @SpeakeasyMetadata({ data: "json, name=DataType" })
  dataType?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MinimumEngineVersion" })
  minimumEngineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
