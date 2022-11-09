import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Vulnerability } from "./vulnerability";


export class VulnerableComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=cvss_max" })
  cvssMax?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=vulnerabilities", elemType: shared.Vulnerability })
  vulnerabilities?: Vulnerability[];
}
