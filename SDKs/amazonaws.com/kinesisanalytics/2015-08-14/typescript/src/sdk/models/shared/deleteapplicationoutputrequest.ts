import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteApplicationOutputRequest
/** 
 * <p/>
**/
export class DeleteApplicationOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=OutputId" })
  outputId: string;
}
