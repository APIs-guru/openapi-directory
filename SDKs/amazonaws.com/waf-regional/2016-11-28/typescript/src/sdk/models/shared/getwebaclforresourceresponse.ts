import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebAclSummary } from "./webaclsummary";



export class GetWebAclForResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WebACLSummary" })
  webAclSummary?: WebAclSummary;
}
