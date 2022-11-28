import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudFrontDistributionCacheBehaviors } from "./awscloudfrontdistributioncachebehaviors";
import { AwsCloudFrontDistributionDefaultCacheBehavior } from "./awscloudfrontdistributiondefaultcachebehavior";
import { AwsCloudFrontDistributionLogging } from "./awscloudfrontdistributionlogging";
import { AwsCloudFrontDistributionOriginGroups } from "./awscloudfrontdistributionorigingroups";
import { AwsCloudFrontDistributionOrigins } from "./awscloudfrontdistributionorigins";



// AwsCloudFrontDistributionDetails
/** 
 * A distribution configuration.
**/
export class AwsCloudFrontDistributionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CacheBehaviors" })
  cacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;

  @SpeakeasyMetadata({ data: "json, name=DefaultCacheBehavior" })
  defaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;

  @SpeakeasyMetadata({ data: "json, name=DefaultRootObject" })
  defaultRootObject?: string;

  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=ETag" })
  eTag?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Logging" })
  logging?: AwsCloudFrontDistributionLogging;

  @SpeakeasyMetadata({ data: "json, name=OriginGroups" })
  originGroups?: AwsCloudFrontDistributionOriginGroups;

  @SpeakeasyMetadata({ data: "json, name=Origins" })
  origins?: AwsCloudFrontDistributionOrigins;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=WebAclId" })
  webAclId?: string;
}
