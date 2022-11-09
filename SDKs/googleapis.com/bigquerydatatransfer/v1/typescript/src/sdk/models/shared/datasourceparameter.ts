import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceParameter } from "./datasourceparameter";

export enum DataSourceParameterTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    String = "STRING"
,    Integer = "INTEGER"
,    Double = "DOUBLE"
,    Boolean = "BOOLEAN"
,    Record = "RECORD"
,    PlusPage = "PLUS_PAGE"
}


// DataSourceParameter
/** 
 * A parameter used to define custom fields in a data source definition.
**/
export class DataSourceParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @Metadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=fields", elemType: shared.DataSourceParameter })
  fields?: DataSourceParameter[];

  @Metadata({ data: "json, name=immutable" })
  immutable?: boolean;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=paramId" })
  paramId?: string;

  @Metadata({ data: "json, name=recurse" })
  recurse?: boolean;

  @Metadata({ data: "json, name=repeated" })
  repeated?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: DataSourceParameterTypeEnum;

  @Metadata({ data: "json, name=validationDescription" })
  validationDescription?: string;

  @Metadata({ data: "json, name=validationHelpUrl" })
  validationHelpUrl?: string;

  @Metadata({ data: "json, name=validationRegex" })
  validationRegex?: string;
}
