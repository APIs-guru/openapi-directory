import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplyMethodEnum } from "./applymethodenum";



export class Parameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowedValues?: string;

  @SpeakeasyMetadata()
  applyMethod?: ApplyMethodEnum;

  @SpeakeasyMetadata()
  applyType?: string;

  @SpeakeasyMetadata()
  dataType?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  isModifiable?: boolean;

  @SpeakeasyMetadata()
  minimumEngineVersion?: string;

  @SpeakeasyMetadata()
  parameterName?: string;

  @SpeakeasyMetadata()
  parameterValue?: string;

  @SpeakeasyMetadata()
  source?: string;
}
