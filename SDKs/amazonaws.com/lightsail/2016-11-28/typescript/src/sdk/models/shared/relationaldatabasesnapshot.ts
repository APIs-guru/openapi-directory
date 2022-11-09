import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";


// RelationalDatabaseSnapshot
/** 
 * Describes a database snapshot.
**/
export class RelationalDatabaseSnapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=engine" })
  engine?: string;

  @Metadata({ data: "json, name=engineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=fromRelationalDatabaseArn" })
  fromRelationalDatabaseArn?: string;

  @Metadata({ data: "json, name=fromRelationalDatabaseBlueprintId" })
  fromRelationalDatabaseBlueprintId?: string;

  @Metadata({ data: "json, name=fromRelationalDatabaseBundleId" })
  fromRelationalDatabaseBundleId?: string;

  @Metadata({ data: "json, name=fromRelationalDatabaseName" })
  fromRelationalDatabaseName?: string;

  @Metadata({ data: "json, name=location" })
  location?: ResourceLocation;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: ResourceTypeEnum;

  @Metadata({ data: "json, name=sizeInGb" })
  sizeInGb?: number;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=supportCode" })
  supportCode?: string;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: Tag[];
}
