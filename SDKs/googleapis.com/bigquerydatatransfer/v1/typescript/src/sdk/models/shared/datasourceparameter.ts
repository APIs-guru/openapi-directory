import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DataSourceParameterTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    String = "STRING",
    Integer = "INTEGER",
    Double = "DOUBLE",
    Boolean = "BOOLEAN",
    Record = "RECORD",
    PlusPage = "PLUS_PAGE"
}


// DataSourceParameter
/** 
 * A parameter used to define custom fields in a data source definition.
**/
export class DataSourceParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedValues" })
  allowedValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=deprecated" })
  deprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=fields", elemType: DataSourceParameter })
  fields?: DataSourceParameter[];

  @SpeakeasyMetadata({ data: "json, name=immutable" })
  immutable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=paramId" })
  paramId?: string;

  @SpeakeasyMetadata({ data: "json, name=recurse" })
  recurse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repeated" })
  repeated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DataSourceParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validationDescription" })
  validationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=validationHelpUrl" })
  validationHelpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=validationRegex" })
  validationRegex?: string;
}
