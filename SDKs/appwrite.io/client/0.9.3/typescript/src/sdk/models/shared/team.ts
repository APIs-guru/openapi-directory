import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Team
/** 
 * Team
**/
export class Team extends SpeakeasyBase {
  @Metadata({ data: "json, name=$id" })
  dollarId: string;

  @Metadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
