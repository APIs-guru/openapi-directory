import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Communication } from "./communication";



// DescribeCommunicationsResponse
/** 
 * The communications returned by the <a>DescribeCommunications</a> operation.
**/
export class DescribeCommunicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communications", elemType: Communication })
  communications?: Communication[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
