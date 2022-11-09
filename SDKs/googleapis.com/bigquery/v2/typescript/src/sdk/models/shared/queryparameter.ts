import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryParameterType } from "./queryparametertype";
import { QueryParameterValue } from "./queryparametervalue";


export class QueryParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameterType" })
  parameterType?: QueryParameterType;

  @Metadata({ data: "json, name=parameterValue" })
  parameterValue?: QueryParameterValue;
}
