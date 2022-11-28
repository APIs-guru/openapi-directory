import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationOutput } from "./validationoutput";



export class GetAppValidationOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validationOutputList", elemType: ValidationOutput })
  validationOutputList?: ValidationOutput[];
}
