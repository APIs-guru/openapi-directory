import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeGroupSummary
/** 
 * Summary of a Amazon Web Services Service Catalog AppRegistry attribute group.
**/
export class AttributeGroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
