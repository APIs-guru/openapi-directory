import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCloudFrontDistributionOriginGroupFailoverStatusCodes
/** 
 * The status codes that cause an origin group to fail over.
**/
export class AwsCloudFrontDistributionOriginGroupFailoverStatusCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Items" })
  items?: number[];

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;
}
