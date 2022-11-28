import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LicenseSimple
/** 
 * License Simple
**/
export class LicenseSimple extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=spdx_id" })
  spdxId: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
