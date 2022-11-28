import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEnvironmentOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;
}
