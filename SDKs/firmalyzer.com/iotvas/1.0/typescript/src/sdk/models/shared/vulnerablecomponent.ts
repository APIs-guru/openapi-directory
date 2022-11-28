import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Vulnerability } from "./vulnerability";



export class VulnerableComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=cvss_max" })
  cvssMax?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=vulnerabilities", elemType: Vulnerability })
  vulnerabilities?: Vulnerability[];
}
