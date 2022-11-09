import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
/** 
 * The status codes that cause an origin group to fail over.
**/
export class AwsCloudFrontDistributionOriginGroupFailoverStatusCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=Items" })
  items?: number[];

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;
}
