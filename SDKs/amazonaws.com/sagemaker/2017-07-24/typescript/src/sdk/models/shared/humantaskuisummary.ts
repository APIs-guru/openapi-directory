import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HumanTaskUiSummary
/** 
 * Container for human task user interface information.
**/
export class HumanTaskUiSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;

  @Metadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;
}
