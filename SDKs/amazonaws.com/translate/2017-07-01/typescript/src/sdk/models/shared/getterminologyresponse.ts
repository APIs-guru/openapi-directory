import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminologyDataLocation } from "./terminologydatalocation";
import { TerminologyProperties } from "./terminologyproperties";


export class GetTerminologyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TerminologyDataLocation" })
  terminologyDataLocation?: TerminologyDataLocation;

  @Metadata({ data: "json, name=TerminologyProperties" })
  terminologyProperties?: TerminologyProperties;
}
