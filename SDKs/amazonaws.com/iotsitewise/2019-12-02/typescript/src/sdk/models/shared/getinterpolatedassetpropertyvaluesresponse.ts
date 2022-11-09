import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InterpolatedAssetPropertyValue } from "./interpolatedassetpropertyvalue";


export class GetInterpolatedAssetPropertyValuesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=interpolatedAssetPropertyValues", elemType: shared.InterpolatedAssetPropertyValue })
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
