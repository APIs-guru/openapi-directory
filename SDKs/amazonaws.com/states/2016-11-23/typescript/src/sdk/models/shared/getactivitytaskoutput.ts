import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActivityTaskOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=input" })
  input?: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken?: string;
}
