import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WebAclSummary } from "./webaclsummary";


export class ListWebAcLsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=WebACLs", elemType: shared.WebAclSummary })
  webAcLs?: WebAclSummary[];
}
