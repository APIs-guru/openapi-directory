import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AliasListEntry
/** 
 * Contains information about an alias.
**/
export class AliasListEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasArn" })
  aliasArn?: string;

  @Metadata({ data: "json, name=AliasName" })
  aliasName?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=TargetKeyId" })
  targetKeyId?: string;
}
