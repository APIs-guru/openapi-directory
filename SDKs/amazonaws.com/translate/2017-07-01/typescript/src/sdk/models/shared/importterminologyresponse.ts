import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TerminologyProperties } from "./terminologyproperties";


export class ImportTerminologyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TerminologyProperties" })
  terminologyProperties?: TerminologyProperties;
}
