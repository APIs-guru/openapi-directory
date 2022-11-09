import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsCloudFrontDistributionOriginGroupFailoverStatusCodes } from "./awscloudfrontdistributionorigingroupfailoverstatuscodes";


// AwsCloudFrontDistributionOriginGroupFailover
/** 
 * Provides information about when an origin group fails over.
**/
export class AwsCloudFrontDistributionOriginGroupFailover extends SpeakeasyBase {
  @Metadata({ data: "json, name=StatusCodes" })
  statusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}
