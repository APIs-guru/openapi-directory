import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Domains } from "./domains";


export class Domains2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=domains", elemType: shared.Domains })
  domains?: Domains[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
