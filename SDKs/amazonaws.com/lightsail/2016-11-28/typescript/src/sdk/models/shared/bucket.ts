import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ableToUpdateBundle" })
  ableToUpdateBundle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=accessRules" })
  accessRules?: AccessRules;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersioning" })
  objectVersioning?: string;

  @SpeakeasyMetadata({ data: "json, name=readonlyAccessAccounts" })
  readonlyAccessAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=resourcesReceivingAccess", elemType: ResourceReceivingAccess })
  resourcesReceivingAccess?: ResourceReceivingAccess[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BucketState;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
