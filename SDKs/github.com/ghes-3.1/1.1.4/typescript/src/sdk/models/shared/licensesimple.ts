import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LicenseSimple
/** 
 * License Simple
**/
export class LicenseSimple extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
