import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterRobotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fleet" })
  fleet?: string;

  @Metadata({ data: "json, name=robot" })
  robot?: string;
}
