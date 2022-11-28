import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AliasListEntry
/** 
 * Contains information about an alias.
**/
export class AliasListEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasArn" })
  aliasArn?: string;

  @SpeakeasyMetadata({ data: "json, name=AliasName" })
  aliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TargetKeyId" })
  targetKeyId?: string;
}
