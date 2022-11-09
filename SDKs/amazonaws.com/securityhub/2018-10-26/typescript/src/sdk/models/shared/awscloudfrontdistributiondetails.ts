import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CacheBehaviors" })
  cacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;

  @Metadata({ data: "json, name=DefaultCacheBehavior" })
  defaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;

  @Metadata({ data: "json, name=DefaultRootObject" })
  defaultRootObject?: string;

  @Metadata({ data: "json, name=DomainName" })
  domainName?: string;

  @Metadata({ data: "json, name=ETag" })
  eTag?: string;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: string;

  @Metadata({ data: "json, name=Logging" })
  logging?: AwsCloudFrontDistributionLogging;

  @Metadata({ data: "json, name=OriginGroups" })
  originGroups?: AwsCloudFrontDistributionOriginGroups;

  @Metadata({ data: "json, name=Origins" })
  origins?: AwsCloudFrontDistributionOrigins;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=WebAclId" })
  webAclId?: string;
}
