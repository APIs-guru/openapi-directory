import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// License
/** 
 * License
**/
export class License extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=featured" })
  featured: boolean;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=implementation" })
  implementation: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=limitations" })
  limitations: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions: string[];

  @SpeakeasyMetadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
