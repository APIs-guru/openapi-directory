import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationTransferParam
/** 
 * Template for application transfer parameters.
**/
export class ApplicationTransferParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string[];
}
