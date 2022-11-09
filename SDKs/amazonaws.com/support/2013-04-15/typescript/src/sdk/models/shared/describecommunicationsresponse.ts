import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Communication } from "./communication";


// DescribeCommunicationsResponse
/** 
 * The communications returned by the <a>DescribeCommunications</a> operation.
**/
export class DescribeCommunicationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=communications", elemType: shared.Communication })
  communications?: Communication[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
