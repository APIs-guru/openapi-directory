import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Privilege } from "./privilege";


export class Privileges extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Privilege })
  items?: Privilege[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
