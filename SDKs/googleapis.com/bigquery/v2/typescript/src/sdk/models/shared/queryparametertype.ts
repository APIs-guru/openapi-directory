import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryParameterType } from "./queryparametertype";
import { QueryParameterType } from "./queryparametertype";


export class QueryParameterTypeStructTypes extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: QueryParameterType;
}


export class QueryParameterType extends SpeakeasyBase {
  @Metadata({ data: "json, name=arrayType" })
  arrayType?: QueryParameterType;

  @Metadata({ data: "json, name=structTypes", elemType: shared.QueryParameterTypeStructTypes })
  structTypes?: QueryParameterTypeStructTypes[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
