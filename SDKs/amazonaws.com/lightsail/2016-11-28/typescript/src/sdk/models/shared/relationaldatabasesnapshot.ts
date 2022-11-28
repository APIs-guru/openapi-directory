import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";



// RelationalDatabaseSnapshot
/** 
 * Describes a database snapshot.
**/
export class RelationalDatabaseSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=fromRelationalDatabaseArn" })
  fromRelationalDatabaseArn?: string;

  @SpeakeasyMetadata({ data: "json, name=fromRelationalDatabaseBlueprintId" })
  fromRelationalDatabaseBlueprintId?: string;

  @SpeakeasyMetadata({ data: "json, name=fromRelationalDatabaseBundleId" })
  fromRelationalDatabaseBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=fromRelationalDatabaseName" })
  fromRelationalDatabaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: Tag })
  tags?: Tag[];
}
