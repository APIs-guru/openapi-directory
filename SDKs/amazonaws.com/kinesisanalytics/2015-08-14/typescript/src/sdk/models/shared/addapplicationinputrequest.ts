import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Input } from "./input";


// AddApplicationInputRequest
/** 
 * <p/>
**/
export class AddApplicationInputRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId: number;

  @Metadata({ data: "json, name=Input" })
  input: Input;
}
