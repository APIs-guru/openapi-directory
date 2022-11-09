import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEnvironmentOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;
}
