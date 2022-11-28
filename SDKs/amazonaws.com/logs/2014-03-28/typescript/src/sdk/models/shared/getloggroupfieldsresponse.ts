import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LogGroupField } from "./loggroupfield";



export class GetLogGroupFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupFields", elemType: LogGroupField })
  logGroupFields?: LogGroupField[];
}
