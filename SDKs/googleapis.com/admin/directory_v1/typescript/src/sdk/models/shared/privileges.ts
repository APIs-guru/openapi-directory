import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Privilege } from "./privilege";



export class Privileges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Privilege })
  items?: Privilege[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
