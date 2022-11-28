import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HumanTaskUiSummary
/** 
 * Container for human task user interface information.
**/
export class HumanTaskUiSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiArn" })
  humanTaskUiArn: string;

  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;
}
