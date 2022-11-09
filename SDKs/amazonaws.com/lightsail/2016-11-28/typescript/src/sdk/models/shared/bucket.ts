import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessRules } from "./accessrules";
import { ResourceLocation } from "./resourcelocation";
import { ResourceReceivingAccess } from "./resourcereceivingaccess";
import { BucketState } from "./bucketstate";
import { Tag } from "./tag";


// Bucket
/** 
 * Describes an Amazon Lightsail bucket.
**/
export class Bucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=ableToUpdateBundle" })
  ableToUpdateBundle?: boolean;

  @Metadata({ data: "json, name=accessRules" })
  accessRules?: AccessRules;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=objectVersioning" })
  objectVersioning?: string;

  @Metadata({ data: "json, name=readonlyAccessAccounts" })
  readonlyAccessAccounts?: string[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @Metadata({ data: "json, name=resourcesReceivingAccess", elemType: shared.ResourceReceivingAccess })
  resourcesReceivingAccess?: ResourceReceivingAccess[];

  @Metadata({ data: "json, name=state" })
  state?: BucketState;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
