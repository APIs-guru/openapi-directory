import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Parameter } from "./parameter";


export class GetParameterResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Parameter" })
  parameter?: Parameter;
}
