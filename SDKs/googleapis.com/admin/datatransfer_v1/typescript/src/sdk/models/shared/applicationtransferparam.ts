import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationTransferParam
/** 
 * Template for application transfer parameters.
**/
export class ApplicationTransferParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string[];
}
