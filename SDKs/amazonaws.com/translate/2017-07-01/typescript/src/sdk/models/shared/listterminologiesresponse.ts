import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminologyProperties } from "./terminologyproperties";



export class ListTerminologiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TerminologyPropertiesList", elemType: TerminologyProperties })
  terminologyPropertiesList?: TerminologyProperties[];
}
