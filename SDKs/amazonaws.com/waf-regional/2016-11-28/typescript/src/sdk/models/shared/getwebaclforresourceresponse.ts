import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebAclSummary } from "./webaclsummary";


export class GetWebAclForResourceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=WebACLSummary" })
  webAclSummary?: WebAclSummary;
}
