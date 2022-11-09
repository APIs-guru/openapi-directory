import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TerminologyProperties } from "./terminologyproperties";


export class ListTerminologiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TerminologyPropertiesList", elemType: shared.TerminologyProperties })
  terminologyPropertiesList?: TerminologyProperties[];
}
