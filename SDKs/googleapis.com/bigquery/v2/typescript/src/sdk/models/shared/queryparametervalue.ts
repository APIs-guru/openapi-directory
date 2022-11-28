import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryParameterValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayValues", elemType: QueryParameterValue })
  arrayValues?: QueryParameterValue[];

  @SpeakeasyMetadata({ data: "json, name=structValues", elemType: QueryParameterValue })
  structValues?: Map<string, QueryParameterValue>;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
