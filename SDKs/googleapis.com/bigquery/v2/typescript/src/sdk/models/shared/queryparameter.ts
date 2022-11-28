import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryParameterType } from "./queryparametertype";
import { QueryParameterValue } from "./queryparametervalue";



export class QueryParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterType" })
  parameterType?: QueryParameterType;

  @SpeakeasyMetadata({ data: "json, name=parameterValue" })
  parameterValue?: QueryParameterValue;
}
