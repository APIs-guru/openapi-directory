import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebAclSummary } from "./webaclsummary";



export class ListWebAcLsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=WebACLs", elemType: WebAclSummary })
  webAcLs?: WebAclSummary[];
}
