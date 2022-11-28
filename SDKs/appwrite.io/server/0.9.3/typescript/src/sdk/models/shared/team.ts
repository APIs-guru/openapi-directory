import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Team
/** 
 * Team
**/
export class Team extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$id" })
  dollarId: string;

  @SpeakeasyMetadata({ data: "json, name=dateCreated" })
  dateCreated: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
