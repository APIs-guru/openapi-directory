import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShareStatusEnum } from "./sharestatusenum";
import { ResolverQueryLogConfigStatusEnum } from "./resolverquerylogconfigstatusenum";


// ResolverQueryLogConfig
/** 
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverQueryLogConfig.html">CreateResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverQueryLogConfig.html">DeleteResolverQueryLogConfig</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverQueryLogConfig.html">GetResolverQueryLogConfig</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverQueryLogConfigs.html">ListResolverQueryLogConfigs</a> request, a complex type that contains settings for one query logging configuration.
**/
export class ResolverQueryLogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=AssociationCount" })
  associationCount?: number;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=CreatorRequestId" })
  creatorRequestId?: string;

  @Metadata({ data: "json, name=DestinationArn" })
  destinationArn?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=ShareStatus" })
  shareStatus?: ShareStatusEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ResolverQueryLogConfigStatusEnum;
}
