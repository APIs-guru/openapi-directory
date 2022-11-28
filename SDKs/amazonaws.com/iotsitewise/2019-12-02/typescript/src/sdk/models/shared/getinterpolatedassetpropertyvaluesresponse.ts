import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InterpolatedAssetPropertyValue } from "./interpolatedassetpropertyvalue";



export class GetInterpolatedAssetPropertyValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interpolatedAssetPropertyValues", elemType: InterpolatedAssetPropertyValue })
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
