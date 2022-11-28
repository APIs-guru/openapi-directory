import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * Tag
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=command" })
  command: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @SpeakeasyMetadata({ data: "json, name=functionId" })
  functionId: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: string;
}
