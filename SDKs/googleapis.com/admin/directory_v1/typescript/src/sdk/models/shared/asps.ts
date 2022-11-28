import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Asp } from "./asp";



export class Asps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Asp })
  items?: Asp[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
