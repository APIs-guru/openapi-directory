import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ValidationOutput } from "./validationoutput";


export class GetAppValidationOutputResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=validationOutputList", elemType: shared.ValidationOutput })
  validationOutputList?: ValidationOutput[];
}
