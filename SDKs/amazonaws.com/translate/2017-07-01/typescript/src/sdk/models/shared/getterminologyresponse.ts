import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminologyDataLocation } from "./terminologydatalocation";
import { TerminologyProperties } from "./terminologyproperties";



export class GetTerminologyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TerminologyDataLocation" })
  terminologyDataLocation?: TerminologyDataLocation;

  @SpeakeasyMetadata({ data: "json, name=TerminologyProperties" })
  terminologyProperties?: TerminologyProperties;
}
