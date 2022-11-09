import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Tag
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=command" })
  command: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @Metadata({ data: "json, name=functionId" })
  functionId: string;

  @Metadata({ data: "json, name=size" })
  size: string;
}
