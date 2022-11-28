import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribePatchPropertiesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Properties" })
  properties?: Map<string, string>[];
}
