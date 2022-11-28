import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionOriginGroupFailoverStatusCodes } from "./awscloudfrontdistributionorigingroupfailoverstatuscodes";



// AwsCloudFrontDistributionOriginGroupFailover
/** 
 * Provides information about when an origin group fails over.
**/
export class AwsCloudFrontDistributionOriginGroupFailover extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StatusCodes" })
  statusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}
