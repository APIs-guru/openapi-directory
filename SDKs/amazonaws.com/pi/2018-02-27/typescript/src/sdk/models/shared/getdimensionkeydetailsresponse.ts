import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionKeyDetail } from "./dimensionkeydetail";



export class GetDimensionKeyDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Dimensions", elemType: DimensionKeyDetail })
  dimensions?: DimensionKeyDetail[];
}
