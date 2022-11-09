import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// License
/** 
 * License
**/
export class License extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=conditions" })
  conditions: string[];

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=featured" })
  featured: boolean;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=implementation" })
  implementation: string;

  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=limitations" })
  limitations: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=permissions" })
  permissions: string[];

  @Metadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
