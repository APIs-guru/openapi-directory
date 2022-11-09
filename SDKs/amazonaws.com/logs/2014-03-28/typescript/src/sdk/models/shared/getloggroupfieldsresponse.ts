import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LogGroupField } from "./loggroupfield";


export class GetLogGroupFieldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupFields", elemType: shared.LogGroupField })
  logGroupFields?: LogGroupField[];
}
