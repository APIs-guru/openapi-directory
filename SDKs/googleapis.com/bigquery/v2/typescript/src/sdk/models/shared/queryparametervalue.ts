import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryParameterValue } from "./queryparametervalue";
import { QueryParameterValue } from "./queryparametervalue";


export class QueryParameterValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayValues", elemType: shared.QueryParameterValue })
  arrayValues?: QueryParameterValue[];

  @Metadata({ data: "json, name=structValues", elemType: shared.QueryParameterValue })
  structValues?: Map<string, QueryParameterValue>;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
