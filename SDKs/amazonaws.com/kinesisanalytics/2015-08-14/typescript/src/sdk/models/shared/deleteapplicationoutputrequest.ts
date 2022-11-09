import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteApplicationOutputRequest
/** 
 * <p/>
**/
export class DeleteApplicationOutputRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @Metadata({ data: "json, name=OutputId" })
  outputId: string;
}
