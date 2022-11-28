import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TerminologyProperties } from "./terminologyproperties";



export class ImportTerminologyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TerminologyProperties" })
  terminologyProperties?: TerminologyProperties;
}
