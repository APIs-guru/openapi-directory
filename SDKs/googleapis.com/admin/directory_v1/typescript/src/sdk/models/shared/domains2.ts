import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domains } from "./domains";



export class Domains2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Domains })
  domains?: Domains[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
