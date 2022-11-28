import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Principal
/** 
 * Describes a principal for use with Resource Access Manager.
**/
export class Principal extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=resourceShareArn" })
  resourceShareArn?: string;
}
