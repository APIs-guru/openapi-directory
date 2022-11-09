import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Error
/** 
 * See the [errors page](errors/) for more detail on what kind of errors you can get.
**/
export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=status" })
  status: number;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
