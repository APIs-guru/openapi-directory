import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Asp } from "./asp";


export class Asps extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Asp })
  items?: Asp[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
