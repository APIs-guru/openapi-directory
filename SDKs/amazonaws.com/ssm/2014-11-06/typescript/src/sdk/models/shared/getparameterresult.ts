import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";



export class GetParameterResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Parameter" })
  parameter?: Parameter;
}
