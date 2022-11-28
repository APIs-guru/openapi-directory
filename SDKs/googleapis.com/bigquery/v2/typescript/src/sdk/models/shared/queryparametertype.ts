import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryParameterTypeStructTypes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: QueryParameterType;
}


export class QueryParameterType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arrayType" })
  arrayType?: QueryParameterType;

  @SpeakeasyMetadata({ data: "json, name=structTypes", elemType: QueryParameterTypeStructTypes })
  structTypes?: QueryParameterTypeStructTypes[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
