import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribePatchPropertiesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Properties" })
  properties?: Map<string, string>[];
}
